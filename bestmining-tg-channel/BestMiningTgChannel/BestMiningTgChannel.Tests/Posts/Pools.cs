using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Pools
{
    public static void Create()
    {
        var (name, title, text) = Rerait();
        var pool = CreatePool(name);
        AddToStorage(pool);
        Save(pool, title, text);
    }

    private static (string Name, string Title, string Text) Rerait()
    {
        var lines = File.ReadAllLines("/home/roman/pool.txt");

        var title = lines[0];
        var name = lines[1];
        var source = string.Join(" ", lines.Skip(2));

        var text = Reraiter.Rerait(source);
        File.WriteAllText("/home/roman/pool-rerait.txt", text);

        return (name, title, text);
    }

    private static Pool CreatePool(string name)
    {
        return new Pool
        {
            Id = name.ToLower(),
            Name = name,
            Img = GetImg(),
        };
    }

    private static string GetImg()
    {
        const int imgsCount = 5;
        return $"tg-channel-news-{DateTime.Now.Ticks % imgsCount + 1}.jpg";
    }

    private static void AddToStorage(Pool pool)
    {
        var poolsFileName = "/home/roman/projects/best-mining/best-mining/docs/data/pools.json";

        var pools = JsonSerializer.Deserialize<Pool[]>(
            File.ReadAllText(poolsFileName)
        )!;

        if (pools.Any(x => x.Id == pool.Id))
        {
            return;
        }

        pools = pools.Append(pool).ToArray();
        File.WriteAllText(poolsFileName, pools.ToJson());
    }

    private static void Save(Pool pool, string title, string text)
    {
        var directory = Path.Combine("/home/roman/projects/best-mining/best-mining/pages/pools", pool.Id);
        var fileName = Path.Combine(directory, "index.html");

        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }

        var html = $@"{title}
<h1>Пул {pool.Name}</h1>
<div class=""my-3"">
    <a class=""btn btn-primary"" href=""/"" rel=""nofollow"" target=""_blank"">
        {pool.Name} <i class=""fas fa-up-right-from-square""></i>
    </a>
</div>
<div class=""card my-3"">
    <div class=""card-body"">
        {HtmlFormatter.Format(text)}
    </div>
</div>
";

        File.WriteAllText(fileName, html);
        Publisher.Publish();
    }

    private class Pool()
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Img { get; set; }
    }
}
