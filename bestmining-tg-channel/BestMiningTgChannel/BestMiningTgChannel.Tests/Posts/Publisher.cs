using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Publisher
{
    public static void Publish()
    {
        var sourceRootDirectory = "/home/roman/projects/best-mining/best-mining/pages";
        var destinationRootDirectory = "/home/roman/projects/best-mining/best-mining/docs";
        var webServerRootDirectory = "/var/www/best-mining";
        var master = File.ReadAllText(Path.Combine(sourceRootDirectory, "master.html"));

        Publisher.PublishInner(sourceRootDirectory, "", destinationRootDirectory, master);
        Publisher.CopyToWebServer(destinationRootDirectory, "", webServerRootDirectory);
    }

    private static void PublishInner(
        string sourceRootDirectory,
        string subDirectory,
        string destinationRootDirectory,
        string master
    )
    {
        var sourceDirectory = Path.Combine(sourceRootDirectory, subDirectory);
        var destinationDirectory = Path.Combine(destinationRootDirectory, subDirectory);

        if (!Directory.Exists(destinationDirectory))
        {
            Directory.CreateDirectory(destinationDirectory);
        }

        var files = Directory
            .GetFiles(sourceDirectory)
            .Select(x => new FileInfo(x).Name)
            .Where(x => x != "master.html");

        var directories = Directory
            .GetDirectories(sourceDirectory)
            .Select(x => new DirectoryInfo(x).Name);

        foreach (var file in files)
        {
            var lines = File.ReadAllLines(Path.Combine(sourceDirectory, file));
            var title = lines[0];
            var content = string.Join(Environment.NewLine, lines.Skip(1));

            var result = master.Replace("{title}", title).Replace("{content}", content);
            File.WriteAllText(Path.Combine(destinationDirectory, file), result);
        }

        foreach (var directory in directories)
        {
            PublishInner(
                sourceRootDirectory,
                Path.Combine(subDirectory, directory),
                destinationRootDirectory,
                master
            );
        }
    }

    private static void CopyToWebServer(
        string sourceRootDirectory,
        string subDirectory,
        string destinationRootDirectory
    )
    {
        var sourceDirectory = Path.Combine(sourceRootDirectory, subDirectory);
        var destinationDirectory = Path.Combine(destinationRootDirectory, subDirectory);

        if (!Directory.Exists(destinationDirectory))
        {
            Directory.CreateDirectory(destinationDirectory);
        }

        var files = Directory
            .GetFiles(sourceDirectory)
            .Select(x => new FileInfo(x).Name);

        var directories = Directory
            .GetDirectories(sourceDirectory)
            .Select(x => new DirectoryInfo(x).Name);

        foreach (var file in files)
        {
            File.Copy(Path.Combine(sourceDirectory, file), Path.Combine(destinationDirectory, file), true);
        }

        foreach (var directory in directories)
        {
            CopyToWebServer(
                sourceRootDirectory,
                Path.Combine(subDirectory, directory),
                destinationRootDirectory
            );
        }
    }

    private static void CreateDefaultCoins()
    {
        var coinsDirectory = "/home/roman/projects/best-mining/best-mining/pages/calculators/mining/coins";
        var json = File.ReadAllText("/home/roman/projects/best-mining/best-mining/docs/data/coins2.json");
        var coins = JsonSerializer.Deserialize<Coin[]>(json)!;

        foreach (var coin in coins)
        {
            if (File.Exists(Path.Combine(coinsDirectory, coin.Tag.ToLower(), "index.html")))
            {
                continue;
            }

            Directory.CreateDirectory(Path.Combine(coinsDirectory, coin.Tag.ToLower()));
            File.WriteAllText(
                Path.Combine(coinsDirectory, coin.Tag.ToLower(), "index.html"),
                @$"Расчет доходности криптовалюты {coin.Title} в рублях и долларах
<div id=""mining-calculator-coin"" data-coin=""{coin.Tag}""></div>"
            );
        }
    }

    private static void CreateDefaultProducts()
    {
        var asicsDirectory = "/home/roman/projects/best-mining/best-mining/pages/calculators/mining/asics";
        var json = File.ReadAllText("/home/roman/projects/best-mining/best-mining/docs/data/products.json");
        var products = JsonSerializer.Deserialize<Product[]>(json)!;

        foreach (var product in products)
        {
            if (File.Exists(Path.Combine(asicsDirectory, product.Id, "index.html")))
            {
                continue;
            }

            Directory.CreateDirectory(Path.Combine(asicsDirectory, product.Id));
            File.WriteAllText(
                Path.Combine(asicsDirectory, product.Id, "index.html"),
                @$"Расчет доходности асик майнера {product.Brand} {product.Model} {product.HashRate} в рублях и долларах
<div id=""mining-calculator-asic"" data-asic-id=""{product.Id}""></div>"
            );
        }
    }

    public class Coin
    {
        public string Tag { get; set; }
        public string Title { get; set; }
    }

    public class Product
    {
        public string Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string HashRate { get; set; }
    }
}