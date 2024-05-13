using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Blog
{
    public static void Create()
    {
        var (title, text) = Rerait();
        var post = CreatePost(title);
        AddToStorage(post);
        Save(post, text);
    }

    private static (string Title, string Text) Rerait()
    {
        var lines = File.ReadAllLines("/home/roman/blog.txt");
        var url = lines[0].Trim();
        var title = lines[1].Trim();

        var source = LoadUrl(url);
        File.WriteAllText("/home/roman/blog-source.txt", source.ToJson());

        var text = Reraiter.Rerait(source);
        File.WriteAllText("/home/roman/blog-rerait.txt", text);

        return (title, text);
    }

    private static ParserResult LoadUrl(string url)
    {
        return Parser.Parse(url);
    }

    private static Post CreatePost(string title)
    {
        return new Post
        {
            Id = BuildId(title),
            Title = title,
            Img = GetImg(),
        };
    }

    private static string BuildId(string title)
    {
        var translit = RussianTransliterator.GetTransliteration(title.ToLower());

        var sha256 = SHA256.Create();
        var hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(translit));
        var id = Convert.ToBase64String(hashBytes).Trim('/').ToLower().Substring(0, 5);

        var chars = $"{id}-{translit}"
            .Select(x =>
            {
                if (char.IsDigit(x)
                    || (x >= 'a' && x <= 'z')
                    || x == '-'
                )
                {
                    return x;
                }

                if (x == ' ')
                {
                    return '-';
                }

                return '\0';
            })
            .Where(x => x != '\0')
            .ToArray();

        return new string(chars);
    }

    private static string GetImg()
    {
        const int imgsCount = 5;
        return $"tg-channel-news-{DateTime.Now.Ticks % imgsCount + 1}.jpg";
    }

    private static void AddToStorage(Post post)
    {
        var postsFileName = "/home/roman/projects/best-mining/best-mining/docs/data/posts.json";

        var posts = JsonSerializer.Deserialize<Post[]>(
            File.ReadAllText(postsFileName)
        )!;

        if (posts.Any(x => x.Id == post.Id))
        {
            return;
        }

        posts = new[] { post }.Concat(posts).ToArray();
        File.WriteAllText(postsFileName, posts.ToJson());
    }

    private static void Save(Post post, string text)
    {
        var directory = Path.Combine("/home/roman/projects/best-mining/best-mining/pages/blog", post.Id);
        var fileName = Path.Combine(directory, "index.html");

        if (!Directory.Exists(directory))
        {
            Directory.CreateDirectory(directory);
        }

        var html = $@"{post.Title}
<h1>{post.Title}</h1>
<div class=""card my-3"">
    <div class=""card-body"">
        {HtmlFormatter.Format(text)}
    </div>
</div>
";

        File.WriteAllText(fileName, html);
        Publisher.Publish();
    }

    private class Post()
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
    }
}
