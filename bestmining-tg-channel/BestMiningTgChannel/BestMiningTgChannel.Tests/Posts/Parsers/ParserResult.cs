using System.Text;

namespace BestMiningTgChannel.Tests;

public class ParserResult
{
    public ParserResultItem[] Items { get; set; }

    public override string ToString()
    {
        var sb = new StringBuilder();

        foreach (var item in Items)
        {
            sb.AppendLine(item.ToString());
        }

        return sb.ToString();
    }
}
