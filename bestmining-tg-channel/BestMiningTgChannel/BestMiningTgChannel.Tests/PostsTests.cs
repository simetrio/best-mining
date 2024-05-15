using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class PostsTests
{
    [Fact]
    public void Blog()
    {
        Setup("0.8", false);

        Tests.Blog.Create();
    }

    [Fact]
    public void BlogCurrent()
    {
        Setup("0.8", true);

        Tests.Blog.Create();
    }

    [Fact]
    public void Pool()
    {
        Setup("0.8", false);

        Pools.Create();
    }

    [Fact]
    public void PoolCurrent()
    {
        Setup("0.8", true);

        Pools.Create();
    }

    [Fact]
    public void Text()
    {
        Setup("0.8", false);

        Texts.Create();
    }

    private void Setup(string temperature, bool reraitCurrent)
    {
        Environment.SetEnvironmentVariable("YaIamToken", File.ReadAllText("/home/roman/YaIamToken.txt").Trim());
        Environment.SetEnvironmentVariable("YaFolderId", File.ReadAllText("/home/roman/YaFolderId.txt").Trim());
        Environment.SetEnvironmentVariable("YaTemperature", temperature);
        Environment.SetEnvironmentVariable("ReraitCurrent", reraitCurrent.ToString());
    }
}