using System.Diagnostics;
using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class PublisherTests
{
    [Fact]
    public void Publish()
    {
        Publisher.Publish();
    }
}
