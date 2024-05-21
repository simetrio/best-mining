using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

namespace BestMiningTgChannel.Tests;

public static class Publisher
{
    public static void Publish()
    {
        var sourceRootDirectory = "/home/roman/projects/best-mining/best-mining/pages";
        var destinationRootDirectory = "/home/roman/projects/best-mining/best-mining/docs";
        var webServerRootDirectory = "/var/www/best-mining";

        MergeScripts(sourceRootDirectory, destinationRootDirectory);
        GenerateSitemap(sourceRootDirectory, "", destinationRootDirectory);

        var master = File.ReadAllText(Path.Combine(sourceRootDirectory, "master.html"));
        PublishInner(sourceRootDirectory, "", destinationRootDirectory, master);

        //  Дожно быть в самом конце
        CopyToWebServer(destinationRootDirectory, "", webServerRootDirectory);
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

    private static void MergeScripts(string sourceRootDirectory, string destinationRootDirectory)
    {
        var data = @$"
const Data = {{
    brands: JSON.parse(`{File.ReadAllText(Path.Combine(destinationRootDirectory, "data", "data.json"))}`),
    products: JSON.parse(`{File.ReadAllText(Path.Combine(destinationRootDirectory, "data", "products.json"))}`),
    coins: JSON.parse(`{File.ReadAllText(Path.Combine(destinationRootDirectory, "data", "coins.json"))}`),
    posts: JSON.parse(`{File.ReadAllText(Path.Combine(destinationRootDirectory, "data", "posts.json"))}`),
    pools: JSON.parse(`{File.ReadAllText(Path.Combine(destinationRootDirectory, "data", "pools.json"))}`),
}}
        ";

        var commonJs = @$"
{data}

{File.ReadAllText(Path.Combine(destinationRootDirectory, "js", "catalog.js"))}

{File.ReadAllText(Path.Combine(destinationRootDirectory, "js", "miningCalculator.js"))}

{File.ReadAllText(Path.Combine(destinationRootDirectory, "js", "blog.js"))}

{File.ReadAllText(Path.Combine(destinationRootDirectory, "js", "pools.js"))}

{File.ReadAllText(Path.Combine(destinationRootDirectory, "js", "main.js"))}
        ";

        File.WriteAllText(Path.Combine(destinationRootDirectory, "js", "common.js"), commonJs);

        var hash = commonJs.CalculateHash(8);
        var script = @$"""/js/common.js?hash={hash}""";

        var master = File.ReadAllText(Path.Combine(sourceRootDirectory, "master.html"));
        master = new Regex(@"\""/js/common\.js\?hash=[\d\w\+]*\""").Replace(master, script);
        File.WriteAllText(Path.Combine(sourceRootDirectory, "master.html"), master);
    }

    private static void GenerateSitemap(
        string sourceRootDirectory,
        string subDirectory,
        string destinationRootDirectory,
        Dictionary<string, Page>? pagesByUrl = null
    )
    {
        var sourceDirectory = Path.Combine(sourceRootDirectory, subDirectory);
        var pagesFileName = Path.Combine(destinationRootDirectory, "data", "sitemap.json");
        var sitemapFileName = Path.Combine(destinationRootDirectory, "sitemap.xml");

        if (pagesByUrl == null)
        {
            pagesByUrl = File
                .ReadAllText(pagesFileName)
                .ToObject<Page[]>()
                .ToDictionary(x => x.Url);
        }

        var fileName = Path.Combine(sourceDirectory, "index.html");
        if (File.Exists(fileName))
        {
            var page = new Page
            {
                Url = !string.IsNullOrEmpty(subDirectory) ? $"/{subDirectory}/" : "/",
                LastModification = DateTime.Now,
                Hash = File.ReadAllText(fileName).CalculateHash(),
            };

            if (!pagesByUrl.TryGetValue(page.Url, out var currentPage)
                || currentPage.Hash != page.Hash)
            {
                pagesByUrl[page.Url] = page;
            }
        }

        var directories = Directory
            .GetDirectories(sourceDirectory)
            .Select(x => new DirectoryInfo(x).Name);

        foreach (var directory in directories)
        {
            GenerateSitemap(
                sourceRootDirectory,
                Path.Combine(subDirectory, directory),
                destinationRootDirectory,
                pagesByUrl
            );
        }

        if (string.IsNullOrEmpty(subDirectory))
        {
            var pages = pagesByUrl
                .Values
                .OrderBy(x => x.Url)
                .ToArray();


            var xml = new StringBuilder();
            xml.AppendLine(@"<?xml version=""1.0"" encoding=""UTF-8""?>
    <urlset xmlns=""http://www.sitemaps.org/schemas/sitemap/0.9"">");

            foreach (var page in pages)
            {
                var url = string.IsNullOrEmpty(page.Url.Trim('/'))
                    ? ""
                    : page.Url;

                xml.AppendLine($@"        <url>
            <loc>https://the-best-mining.ru{url}</loc>
            <lastmod>{page.LastModification:yyyy-MM-dd}</lastmod>
        </url>");
            }

            xml.AppendLine("    </urlset>");
       
            File.WriteAllText(pagesFileName, pages.ToJson());
            File.WriteAllText(sitemapFileName, xml.ToString());
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

    public class Page
    {
        public string Url { get; set; }
        public DateTime LastModification { get; set; }
        public string Hash { get; set; }

        public override bool Equals(object? obj)
        {
            return Url.Equals(((Page)obj).Url);
        }

        public override int GetHashCode()
        {
            return Url.GetHashCode();
        }
    }
}