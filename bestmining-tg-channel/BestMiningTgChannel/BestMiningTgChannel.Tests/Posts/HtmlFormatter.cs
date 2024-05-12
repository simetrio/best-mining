namespace BestMiningTgChannel.Tests;

public static class HtmlFormatter
{
    public static string Format(string html)
    {
        var lines = html
            .Split(Environment.NewLine)
            .Select(x => x.Trim())
            .Select(FormatLine);

        return string.Join(Environment.NewLine, lines);
    }

    private static string FormatLine(string line)
    {
        if (line.StartsWith("**"))
        {
            return FormatHeader(line);
        }

        if (line.StartsWith("* "))
        {
            return FormatList(line);
        }

        return FormatParagraph(line);
    }

    private static string FormatHeader(string line) => $"<h2>{Clean(line)}</h2>";

    private static string FormatList(string line) => $"<li>{Clean(line)}</li>";

    private static string FormatParagraph(string line) => $@"<p class=""card-text"">{Clean(line)}</p>";

    private static string Clean(string line) => line.Replace("*", "").Trim();
}
