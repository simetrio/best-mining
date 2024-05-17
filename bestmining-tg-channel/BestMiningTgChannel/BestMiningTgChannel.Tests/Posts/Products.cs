namespace BestMiningTgChannel.Tests;

public static class Products
{
    public static void Create()
    {
        var (id, text) = CreateNew();
        Save(id, text);
    }

    private static (string Id, string Text) CreateNew()
    {
        var id = File.ReadAllText("/home/roman/product.txt").Trim();
        var product = File
            .ReadAllText("/home/roman/projects/best-mining/best-mining/docs/data/products.json")
            .ToObject<Product[]>()
            .Single(x => x.Id == id);
        var name = $"{product.Brand} {product.Model} {product.HashRate}";

        var source = new ParserResult
        {
            Items =
            [
                new ParserResultItem
                {
                    Head = "",
                    Text = $"Описание {name}",
                },
                new ParserResultItem
                {
                    Head = "Преимущества",
                    Text = $"Преимущества {name}",
                },
                new ParserResultItem
                {
                    Head = $"О бренде {product.Brand}",
                    Text = $"О бренде {product.Brand}",
                },
                new ParserResultItem
                {
                    Head = $"Как купить",
                    Text = $"Купить {name} в нашем магазине с доставкой по всей россии",
                }
            ]
        };

        var text = Reraiter.Create(source);
        File.WriteAllText("/home/roman/product-rerait.txt", text);

        return (id, text);
    }

    private static void Save(string id, string text)
    {
        var directory = Path.Combine("/home/roman/projects/best-mining/best-mining/pages/catalog", id);
        var fileName = Path.Combine(directory, "index.html");

        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }

        var before = new List<string>();
        var after = new List<string>();
        var state = State.Before;

        var lines = File.ReadAllLines(fileName);
        foreach (var line in lines)
        {
            if (line.Trim() == "<!-- /Description -->")
            {
                state = State.After;
            }

            switch (state)
            {
                case State.Before:
                    before.Add(line);
                    break;

                case State.After:
                    after.Add(line);
                    break;

                default:
                    break;
            }

            if (line.Trim() == "<!-- Description -->")
            {
                state = State.Inside;
            }
        }

        if (state != State.After)
        {
            throw new Exception("В тексте отсутствуют нужные тэги");
        }

        var productLines = HtmlFormatter.Format(text).Split('\n');

        var html = string.Join(
            Environment.NewLine,
            before.Concat(productLines).Concat(after)
        );

        File.WriteAllText(fileName, html);
        Publisher.Publish();
    }

    private class Product
    {
        public string Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string HashRate { get; set; }
    }

    private enum State
    {
        Before,
        Inside,
        After,
    }
}
