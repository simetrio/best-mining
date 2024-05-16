using System.Text;
using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Reraiter
{
    public static string Rerait(ParserResult parserResult)
    {
        if (Settings.ParseOnly.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            throw new Exception("Только парсинг");
        }

        if (Settings.ReraitCurrent.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            return File.ReadAllText("/home/roman/rerait.txt");
        }

        // throw new NotImplementedException();
        var result = new StringBuilder();

        foreach (var item in parserResult.Items)
        {
            if (!string.IsNullOrEmpty(item.Head.Trim()))
            {
                result.AppendLine($"**{item.Head.Trim()}**");
            }

            result.AppendLine(Rerait(item.Text));
            Task.Delay(1000).GetAwaiter().GetResult();
        }

        File.WriteAllText("/home/roman/rerait.txt", result.ToString());
        return result.ToString();
    }

    public static string Create(ParserResult parserResult)
    {
        if (Settings.ParseOnly.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            throw new Exception("Только парсинг");
        }

        if (Settings.ReraitCurrent.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            return File.ReadAllText("/home/roman/rerait.txt");
        }

        // throw new NotImplementedException();
        var result = new StringBuilder();

        foreach (var item in parserResult.Items)
        {
            if (!string.IsNullOrEmpty(item.Head.Trim()))
            {
                result.AppendLine($"**{item.Head.Trim()}**");
            }

            result.AppendLine(Create(item.Text));
            Task.Delay(1000).GetAwaiter().GetResult();
        }

        File.WriteAllText("/home/roman/rerait.txt", result.ToString());
        return result.ToString();
    }

    public static string Rerait(string message)
    {
        return Send(message, "перескажи своими словами с сохранением структуры");
    }

    public static string Create(string message)
    {
        return Send(message, "ты копирайтер");
    }

    public static string Send(string message, string role)
    {
        if (Settings.ParseOnly.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            throw new Exception("Только парсинг");
        }

        if (Settings.ReraitCurrent.Equals(bool.TrueString, StringComparison.CurrentCultureIgnoreCase))
        {
            return File.ReadAllText("/home/roman/rerait.txt");
        }

        var json = _jsonTemplate
            .Replace("{role}", role)
            .Replace("{message}", FormatMessage(message))
            .Replace("{temperature}", Settings.YaTemperature);
        File.WriteAllText("/home/roman/request.txt", json);

        using var httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Add("Authorization", $"Api-Key {Settings.YaIamToken}");
        httpClient.DefaultRequestHeaders.Add("x-folder-id", Settings.YaFolderId);

        using var data = new StringContent(json, Encoding.UTF8, "application/json");

        using var response = httpClient
           .PostAsync("https://llm.api.cloud.yandex.net/foundationModels/v1/completion", data)
           .GetAwaiter()
           .GetResult();


        var jsonResponse = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
        File.WriteAllText("/home/roman/html.txt", jsonResponse);

        response.EnsureSuccessStatusCode();
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
            .Replace("\t", "")
            .Replace("\"", "")
            .Replace("\r", "")
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
      ""text"": ""{role}"",
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
