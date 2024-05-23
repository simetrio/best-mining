using BestMiningTgChannel.Publisher;

namespace BestMiningTgChannel.Tests;

public class HandlerTests
{
    [Fact]
    public void Send()
    {
        Environment.SetEnvironmentVariable("TgBotId", File.ReadAllText("/home/roman/TgBotId.txt").Trim());
        Environment.SetEnvironmentVariable("TgBotToken", File.ReadAllText("/home/roman/TgBotToken.txt").Trim());
        Environment.SetEnvironmentVariable("TgChannelId", File.ReadAllText("/home/roman/TgChannelId.txt").Trim());
        Environment.SetEnvironmentVariable("TgChatId", File.ReadAllText("/home/roman/TgChatId.txt").Trim());
        Environment.SetEnvironmentVariable("TgUserName", File.ReadAllText("/home/roman/TgUserName.txt").Trim());
        Environment.SetEnvironmentVariable("YaIamToken", File.ReadAllText("/home/roman/YaIamToken.txt").Trim());
        Environment.SetEnvironmentVariable("YaFolderId", File.ReadAllText("/home/roman/YaFolderId.txt").Trim());
        Environment.SetEnvironmentVariable("ChartHour", DateTime.UtcNow.Hour.ToString());
        Environment.SetEnvironmentVariable("PriceHour", DateTime.UtcNow.Hour.ToString());

        new Handler().FunctionHandler("{\"Action\": \"Send\"}");
    }

    [Fact]
    public void Messages()
    {
        Environment.SetEnvironmentVariable("TgBotId", File.ReadAllText("/home/roman/TgBotId.txt").Trim());
        Environment.SetEnvironmentVariable("TgBotToken", File.ReadAllText("/home/roman/TgBotToken.txt").Trim());
        
        var chatId = BestMiningTgChannel.Publisher.Telegram.GetLastMessageChatId();
        throw new Exception(chatId);
    }

    [Fact]
    public void SendMessageToManager()
    {
        Environment.SetEnvironmentVariable("TgBotId", File.ReadAllText("/home/roman/TgBotId.txt").Trim());
        Environment.SetEnvironmentVariable("TgBotToken", File.ReadAllText("/home/roman/TgBotToken.txt").Trim());
        Environment.SetEnvironmentVariable("TgManagerChatId", File.ReadAllText("/home/roman/TgManagerChatId.txt").Trim());
        
        BestMiningTgChannel.Publisher.Telegram.SendMessageToManager(DateTime.Now.ToString());
    }
}