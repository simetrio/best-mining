namespace BestMiningTgChannel.Tests;

public static class ProductsProfits
{
    public static void Create()
    {
        var products = ReadProducts().Where(NeedCreate);

        foreach (var product in products)
        {
            var text = CreateNew(product);
            Save(product, text);
        }
    }

    private static IEnumerable<Product> ReadProducts()
    {
        return File
            .ReadAllText("/home/roman/projects/best-mining/best-mining/docs/data/products.json")
            .ToObject<Product[]>();
    }

    private static bool NeedCreate(Product product)
    {
        string fileName = $"/home/roman/projects/best-mining/best-mining/pages/calculators/mining/asics/{product.Id}/index.html";
        if (!File.Exists(fileName))
        {
            return false;
        }

        return File
            .ReadAllLines(fileName)
            .Where(x => !string.IsNullOrEmpty(x))
            .Last()
            .Contains(@"id=""mining-calculator-asic""");
    }

    private static string CreateNew(Product product)
    {
        var source = new ParserResult
        {
            Items =
            [
                new ParserResultItem
                {
                    Head = "",
                    Text = $"Описание {product.GetName()}",
                },
                new ParserResultItem
                {
                    Head = "Расчет доходности",
                    Text = $"Расчет доходности {product.GetName()}",
                },
            ],
        };

        var text = Reraiter.Create(source);
        File.WriteAllText("/home/roman/product-rerait.txt", text);

        return text;
    }

    private static void Save(Product product, string text)
    {
        var fileName = $"/home/roman/projects/best-mining/best-mining/pages/calculators/mining/asics/{product.Id}/index.html";

        var html = $@"
        
<div class=""card my-3"">
    <div class=""card-body"">
{HtmlFormatter.Format(text)}
    </div>
</div>
    ";

        File.AppendAllText(fileName, html);
        Publisher.Publish();
    }

    private class Product
    {
        public string Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string HashRate { get; set; }

        public string GetName() => $"{Brand} {Model} {HashRate}";
    }
}
