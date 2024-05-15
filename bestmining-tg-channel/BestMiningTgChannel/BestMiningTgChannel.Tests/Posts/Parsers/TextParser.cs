namespace BestMiningTgChannel.Tests;

public static class TextParser
{
    public static ParserResult Parse(string url)
    {
        var lines = File.ReadAllLines("/home/roman/text.txt");

        var items = new List<ParserResultItem>();
        var item = new ParserResultItem();
        items.Add(item);

        foreach (var line in lines.Select(x => x.Trim()))
        {
            if (line.StartsWith("**") && line.EndsWith("**"))
            {
                item = new ParserResultItem();
                items.Add(item);
                item.Head = line;
            }
            else
            {
                item.Text += Environment.NewLine;
                item.Text += line;
            }
        }

        return new ParserResult { Items = items.ToArray() };
    }
}
