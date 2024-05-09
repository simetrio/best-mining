using System.Diagnostics;
using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class PublisherTests
{
    [Fact]
    public void Publish()
    {
        var sourceRootDirectory = "/home/roman/projects/best-mining/best-mining/pages";
        var destinationRootDirectory = "/home/roman/projects/best-mining/best-mining/docs";
        var webServerRootDirectory = "/var/www/best-mining";
        var master = File.ReadAllText(Path.Combine(sourceRootDirectory, "master.html"));

        PublishInner(sourceRootDirectory, "", destinationRootDirectory, master);
        CopyToWebServer(destinationRootDirectory, "", webServerRootDirectory);
    }

    private void PublishInner(
        string sourceRootDirectory,
        string subDirectory,
        string destinationRootDirectory,
        string master
    )
    {
        var sourceDirectory = Path.Combine(sourceRootDirectory, subDirectory);
        var destinationDirectory = Path.Combine(destinationRootDirectory, subDirectory);

        if (!Directory.Exists(destinationDirectory))
        {
            Directory.CreateDirectory(destinationDirectory);
        }

        var files = Directory
            .GetFiles(sourceDirectory)
            .Select(x => new FileInfo(x).Name)
            .Where(x => x != "master.html");

        var directories = Directory
            .GetDirectories(sourceDirectory)
            .Select(x => new DirectoryInfo(x).Name);

        foreach (var file in files)
        {
            var lines = File.ReadAllLines(Path.Combine(sourceDirectory, file));
            var title = lines[0];
            var content = string.Join(Environment.NewLine, lines.Skip(1));

            var result = master.Replace("{title}", title).Replace("{content}", content);
            File.WriteAllText(Path.Combine(destinationDirectory, file), result);
        }

        foreach (var directory in directories)
        {
            PublishInner(
                sourceRootDirectory,
                Path.Combine(subDirectory, directory),
                destinationRootDirectory,
                master
            );
        }
    }

    private void CopyToWebServer(
        string sourceRootDirectory,
        string subDirectory,
        string destinationRootDirectory
    )
    {
        var sourceDirectory = Path.Combine(sourceRootDirectory, subDirectory);
        var destinationDirectory = Path.Combine(destinationRootDirectory, subDirectory);

        if (!Directory.Exists(destinationDirectory))
        {
            Directory.CreateDirectory(destinationDirectory);
        }

        var files = Directory
            .GetFiles(sourceDirectory)
            .Select(x => new FileInfo(x).Name);

        var directories = Directory
            .GetDirectories(sourceDirectory)
            .Select(x => new DirectoryInfo(x).Name);

        foreach (var file in files)
        {
            File.Copy(Path.Combine(sourceDirectory, file), Path.Combine(destinationDirectory, file), true);
        }

        foreach (var directory in directories)
        {
            CopyToWebServer(
                sourceRootDirectory,
                Path.Combine(subDirectory, directory),
                destinationRootDirectory
            );
        }
    }
}