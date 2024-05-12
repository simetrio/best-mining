namespace BestMiningTgChannel.Tests;

public static class HtmlFormatter
{
    public static string Format(string html)
    {
        var lines = html
            .Split(Environment.NewLine)
            .Select(x => x.Trim())
            .Where(x => !string.IsNullOrEmpty(x))
            .Select(FormatLine);

        return string.Join(Environment.NewLine, lines);
    }

    private static string FormatLine(string line)
    {
        if (line.StartsWith("**") && line.EndsWith("**"))
        {
            return FormatHeader(line);
        }

        if (line.StartsWith("* ") || char.IsDigit(line[0]))
        {
            return FormatList(line);
        }

        return FormatParagraph(line);
    }

    private static string FormatHeader(string line) => $"<h2>{Clean(line)}</h2>";

    private static string FormatList(string line) => $"<li>{CleanStartDigits(Clean(line))}</li>";

    private static string FormatParagraph(string line) => $@"<p class=""card-text my-3"">{Clean(line)}</p>";

    private static string Clean(string line) => line.Replace("*", "").Trim();

    private static string CleanStartDigits(string line) => char.IsDigit(line[0]) && line.IndexOf('.') != -1
        ? line.Substring(line.IndexOf('.') + 1).Trim()
        : line;
}
