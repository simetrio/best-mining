using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class PostsTests
{
    [Fact]
    public void Blog()
    {
        Setup("0.8");

        Tests.Blog.Create();
    }

    [Fact]
    public void BlogCurrent()
    {
        Setup("0.8", reraitCurrent: true);

        Tests.Blog.Create();
    }

    [Fact]
    public void Pool()
    {
        Setup("0.8");

        Pools.Create();
    }

    [Fact]
    public void PoolCurrent()
    {
        Setup("0.8", reraitCurrent: true);

        Pools.Create();
    }

    [Fact]
    public void PoolParse()
    {
        Setup("0.8", parseOnly: true);

        Pools.Create();
    }

    [Fact]
    public void PoolCreate()
    {
        Setup("0.8");

        Pools.Create(isRerait: false);
    }

    [Fact]
    public void Text()
    {
        Setup("0.8");

        Texts.Create();
    }

    [Fact]
    public void Product()
    {
        Setup("0");

        Products.Create();
    }

    [Fact]
    public void ProductCurrent()
    {
        Setup("0", reraitCurrent : true);

        Products.Create();
    }

    [Fact]
    public void Coin()
    {
        Setup("0.8");

        Coins.Create();
    }

    [Fact]
    public void CoinCurrent()
    {
        Setup("0.8", reraitCurrent : true);

        Coins.Create();
    }

    private void Setup(string temperature, bool reraitCurrent = false, bool parseOnly = false)
    {
        Environment.SetEnvironmentVariable("YaIamToken", File.ReadAllText("/home/roman/YaIamToken.txt").Trim());
        Environment.SetEnvironmentVariable("YaFolderId", File.ReadAllText("/home/roman/YaFolderId.txt").Trim());
        Environment.SetEnvironmentVariable("YaTemperature", temperature);
        Environment.SetEnvironmentVariable("ReraitCurrent", reraitCurrent.ToString());
        Environment.SetEnvironmentVariable("ParseOnly", parseOnly.ToString());
    }
}