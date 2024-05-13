using HtmlAgilityPack;

namespace BestMiningTgChannel.Tests;

public static class GetAsicParser
{
    public static ParserResult Parse(string url)
    {
        var html = new HttpClient()
                   .GetStringAsync(url)
                   .GetAwaiter()
                   .GetResult();

        var htmlDocument = new HtmlDocument();
        htmlDocument.LoadHtml(html);

        var document = htmlDocument
            .DocumentNode
            .SelectSingleNode("/html/body/section/div/div[2]/div[1]/div[1]");

        var items = new List<ParserResultItem>();
        var item = new ParserResultItem();
        items.Add(item);

        foreach (var node in document.ChildNodes)
        {
            if (Heads.Contains(node.Name))
            {
                item = new ParserResultItem();
                items.Add(item);
                item.Head = node.InnerText;
            }
            else
            {
                item.Text += Environment.NewLine;
                item.Text += node.InnerText;
            }
        }

        return new ParserResult { Items = items.ToArray() };
    }

    private static HashSet<string> Heads { get; } = new HashSet<string>(["h1", "h2", "h3", "h4", "h5", "h6",]);
}
