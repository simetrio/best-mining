using System.Text;

namespace BestMiningTgChannel.Tests;

public class ParserResultItem
{
    public string Head { get; set; } = "";

    public string Text { get; set; } = "";

    public override string ToString()
    {
        var sb = new StringBuilder();

        sb.AppendLine($"**{Head}**");
        sb.AppendLine(Text);

        return sb.ToString();
    }
}
