using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class PostsTests
{
    [Fact]
    public void Pool()
    {
        Environment.SetEnvironmentVariable("YaIamToken", File.ReadAllText("/home/roman/YaIamToken.txt").Trim());
        Environment.SetEnvironmentVariable("YaFolderId", File.ReadAllText("/home/roman/YaFolderId.txt").Trim());

        Pools.Create();
    }

    [Fact]
    public void Text()
    {
        Environment.SetEnvironmentVariable("YaIamToken", File.ReadAllText("/home/roman/YaIamToken.txt").Trim());
        Environment.SetEnvironmentVariable("YaFolderId", File.ReadAllText("/home/roman/YaFolderId.txt").Trim());

        Texts.Create();
    }
}