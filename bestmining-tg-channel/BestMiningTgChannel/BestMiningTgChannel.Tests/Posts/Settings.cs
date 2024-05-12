namespace BestMiningTgChannel.Tests;

public static class Settings
{
    public static string YaIamToken => Get("YaIamToken");
    public static string YaFolderId => Get("YaFolderId");

    private static string Get(string name) => Environment.GetEnvironmentVariable(name)!;
}