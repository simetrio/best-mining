namespace BestMiningTgChannel.Tests;

public static class Parser
{
    public static ParserResult Parse(string url)
    {
        return Parsers.Single(x => url.Contains(x.Key)).Value(url);
    }

    private static Dictionary<string, Func<string, ParserResult>> Parsers { get; } = new Dictionary<string, Func<string, ParserResult>>
    {
        { "miningmoon.ru", GetAsicParser.Parse},
        { "ibmm.ru", IbmmParser.Parse},
        { "crypto.ru", CryptoParser.Parse},

        // Должен быть самым последним
        { "text", TextParser.Parse},
    };
}
