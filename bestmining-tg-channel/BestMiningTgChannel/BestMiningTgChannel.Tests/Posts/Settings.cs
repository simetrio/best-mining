namespace BestMiningTgChannel.Tests;

public static class Settings
{
    public static string YaIamToken => Get("YaIamToken");
    public static string YaFolderId => Get("YaFolderId");
    public static string YaTemperature => Get("YaTemperature");
    public static string ReraitCurrent => Get("ReraitCurrent");
    public static string ParseOnly => Get("ParseOnly");

    private static string Get(string name) => Environment.GetEnvironmentVariable(name)!;
}