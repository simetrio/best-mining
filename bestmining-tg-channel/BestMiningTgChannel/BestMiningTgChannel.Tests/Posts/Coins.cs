namespace BestMiningTgChannel.Tests;

public static class Coins
{
    public static void Clean()
    {
        var availableAlghoritms = new[] { "ETCHASH", "ETHASH", "SHA-256", "Scrypt", "kHeavyHash", "X11" }
            .Select(x => x.ToLower())
            .ToHashSet();

        var coins = ReadCoins();
        string[] rootDirectories = [
            "/home/roman/projects/best-mining/best-mining/docs/calculators/mining/coins",
            "/home/roman/projects/best-mining/best-mining/pages/calculators/mining/coins",
        ];

        foreach (string rootDir in rootDirectories)
        {
            foreach (var coin in coins.Where(x => !availableAlghoritms.Contains(x.Algorithm)))
            {
                var directory = Path.Combine(rootDir, coin.Id);
                if (Directory.Exists(directory))
                {
                    Directory.Delete(directory, true);
                }
            }
        }
    }

    public static void Create()
    {
        Clean(); return;
        var coins = ReadCoins().Where(NeedCreate);

        foreach (var coin in coins)
        {
            var text = CreateNew(coin);
            Save(coin, text);
        }
    }

    private static IEnumerable<Coin> ReadCoins()
    {
        var lines = File
            .ReadAllLines("/home/roman/projects/best-mining/best-mining/docs/data/coins.json")
            .Select(x => x.Trim().Trim(',').Replace("\"", "").Trim())
            .ToArray();

        for (var i = 0; i < lines.Length; i++)
        {
            if (!lines[i].StartsWith("tag"))
            {
                continue;
            }

            yield return new Coin
            {
                Id = lines[i].Substring(lines[i].IndexOf(" ") + 1).ToLower(),
                Name = lines[i - 2].Substring(0, lines[i - 2].IndexOf(":")),
                Algorithm = lines[i + 1].Substring(lines[i + 1].IndexOf(" ") + 1).ToLower(),
            };
        }
    }

    private static bool NeedCreate(Coin coin)
    {
        string fileName = $"/home/roman/projects/best-mining/best-mining/pages/calculators/mining/coins/{coin.Id}/index.html";
        if (!File.Exists(fileName))
        {
            return false;
        }

        return File
            .ReadAllLines(fileName)
            .Where(x => !string.IsNullOrEmpty(x))
            .Last()
            .Contains(@"id=""mining-calculator-coin""");
    }

    private static string CreateNew(Coin coin)
    {
        var text = Reraiter.Create($"Майнинг калькулятор {coin.Name}");
        File.WriteAllText("/home/roman/product-rerait.txt", text);

        return text;
    }

    private static void Save(Coin coin, string text)
    {
        var fileName = $"/home/roman/projects/best-mining/best-mining/pages/calculators/mining/coins/{coin.Id}/index.html";

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

    private class Coin
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Algorithm { get; set; }
    }
}
