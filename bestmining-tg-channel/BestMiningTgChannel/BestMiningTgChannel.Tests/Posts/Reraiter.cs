using System.Text;
using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Reraiter
{
    public static string Rerait(string message)
    {
        if (Settings.ReraitCurrent.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            return File.ReadAllText("/home/roman/rerait.txt");
        }

        var json = _jsonTemplate
            .Replace("{message}", FormatMessage(message))
            .Replace("{temperature}", Settings.YaTemperature);

        using var httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Add("Authorization", $"Api-Key {Settings.YaIamToken}");
        httpClient.DefaultRequestHeaders.Add("x-folder-id", Settings.YaFolderId);

        using var data = new StringContent(json, Encoding.UTF8, "application/json");

        using var response = httpClient
           .PostAsync("https://llm.api.cloud.yandex.net/foundationModels/v1/completion", data)
           .GetAwaiter()
           .GetResult();

        response.EnsureSuccessStatusCode();

        var jsonResponse = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
        var responseObject = JsonSerializer.Deserialize<YaResponse>(jsonResponse)!;

        string text = responseObject.result.alternatives[0].message.text;
        File.WriteAllText("/home/roman/rerait.txt", text);
        return text;
    }

    private static string FormatMessage(string message)
    {
        return message
            .Replace("\n", " ")
            .Replace("://", "")
            ;
    }

    private class YaResponse
    {
        public YaResponseResult result { get; set; }
    }

    private class YaResponseResult
    {
        public YaResponseAlternative[] alternatives { get; set; }
    }

    private class YaResponseAlternative
    {
        public YaResponseMessage message { get; set; }
    }

    private class YaResponseMessage
    {
        public string text { get; set; }
    }

    private const string _jsonTemplate = @"
{
  ""modelUri"": ""gpt://b1gn410mgu2s1lqpq2va/yandexgpt"",
  ""messages"": [
    {
      ""text"": ""перескажи своими словами с сохранением структуры"",
      ""role"": ""system""
    },
    {
      ""text"": ""{message}"",
      ""role"": ""user""
    }
  ],
  ""completionOptions"": {
    ""stream"": false,
    ""maxTokens"": 5000,
    ""temperature"": {temperature}
  }
}
    ";
}
