using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Texts
{
    public static void Create()
    {
        var source = File.ReadAllText("/home/roman/text.txt");
        var text = Reraiter.Rerait(source);
        var html = HtmlFormatter.Format(text);
       
        File.WriteAllText("/home/roman/text-rerait.txt", text);
        File.WriteAllText("/home/roman/text-rerait-html.txt", html);
    }
}
