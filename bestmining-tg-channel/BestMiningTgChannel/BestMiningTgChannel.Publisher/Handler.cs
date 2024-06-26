﻿using System.Text.Json;
using System;
using Telegram.Bot;
using Telegram.Bot.Types.Enums;
using Telegram.Bot.Types;
using System.Text;
using System.Globalization;
using HtmlAgilityPack;

namespace BestMiningTgChannel.Publisher;

public class Handler : HandlerBase
{
    protected override string HandleRequest(string body, RequestData? requestData)
    {
        Logger.Log($"Action {requestData?.Action.ToString() ?? "null"}");

        switch (requestData?.Action ?? Action.Send)
        {
            case Action.Send:
                Utils.WithNotifyAboutError(() =>
                {
                    ChartSender.Send();
                    NewsSender.Send();
                    PricesSender.Send();
                }, "Не удалось выполнить действие Send");

                return "Ok";

            case Action.CalculateMining:
                return MiningCalculator.Send(requestData.Command);

            case Action.Order:
                Utils.WithNotifyAboutError(() =>
                {
                    Order.Send(requestData.Command);
                }, "Не удалось выполнить действие Order");

                return "Ok";

            default:
                return "Action not found";
        }
    }
}

#region ChartSender

public static class ChartSender
{
    public static void Send()
    {
        if (DateTime.UtcNow.Hour != Settings.ChartHour)
        {
            return;
        }

        var charts = LoadCharts().ToArray();
        var minings = LoadMinings().ToArray();

        var message = MessageTemplate.Format(BuildMessage(charts, minings));
        var img = GetImg();

        Telegram.SendChannelMessage(message, img);
        Telegram.SendMessage("Отправил котировки");
    }

    private static string GetImg()
    {
        const int imgsCount = 3;
        return $"https://the-best-mining.ru/img/tg-channel/tg-channel-chart-{DateTime.Now.Ticks % imgsCount + 1}.jpg";
    }

    private static string BuildMessage(Chart[] charts, Mining[] minings)
    {
        var sb = new StringBuilder();

        sb.AppendLine("⚡️ Изменение курсов криптовалют за 24 часа ⚡️");

        foreach (var chart in charts)
        {
            var upDown = chart.DiffPercent >= 0 ? "↗️" : "↘️";
            var plusMinus = chart.DiffPercent >= 0 ? "+" : "";
            sb.AppendLine();
            sb.AppendLine($"{upDown} {chart.Currency} - {chart.Value.ToString("C", CultureInfo.CreateSpecificCulture("en-US"))}  ({plusMinus}{chart.DiffPercent:P2})");
        }

        sb.AppendLine();
        sb.AppendLine();
        sb.AppendLine("⚡️ Доходность майнинга за 24 часа без учета ээ ⚡️");

        foreach (var maningGroup in minings.GroupBy(x => x.Algorithm))
        {
            sb.AppendLine();
            sb.AppendLine($"🪙 {maningGroup.Key} - доход на {maningGroup.First().HashRate}");
            sb.AppendLine();

            foreach (var mining in maningGroup.OrderByDescending(x => x.Value))
            {
                sb.AppendLine($"{mining.Currency} - {mining.Value.ToString("C", CultureInfo.CreateSpecificCulture("en-US"))}");
            }
        }

        return sb.ToString();
    }

    private static IEnumerable<Chart> LoadCharts()
    {
        var html = new HttpClient()
            .GetStringAsync("https://www.coingecko.com")
            .GetAwaiter()
            .GetResult()
            .Replace("\r", "")
            .Replace("\n", "")
            ;

        var htmlDocument = new HtmlDocument();
        htmlDocument.LoadHtml(html);

        var document = htmlDocument
            .DocumentNode
            .SelectNodes("//table")
            .Single(x => x.GetAttributeValue("data-coin-table-target", "") == "table")
            .ChildNodes
            .Single(x => x.Name.ToLower() == "tbody");

        var currencies = new[] { "Bitcoin", "Ethereum" };

        foreach (var currency in currencies)
        {
            var row = document.ChildNodes
                .Where(x => x.Name.ToLower() == "tr")
                .First(x => x.InnerText.Contains(currency));

            var value = row.ChildNodes
                .Where(x => x.Name.ToLower() == "td")
                .Skip(4)
                .First()
                .GetAttributeValue("data-sort", "");
            var percent = row.ChildNodes
                .Where(x => x.Name.ToLower() == "td")
                .Skip(6)
                .First()
                .GetAttributeValue("data-sort", ""); ;

            yield return new Chart
            {
                Currency = currency,
                Value = decimal.Parse(value, CultureInfo.InvariantCulture),
                DiffPercent = decimal.Parse(percent, CultureInfo.InvariantCulture) / 100m,
            };
        }
    }

    private static IEnumerable<Mining> LoadMinings()
    {
        var currencies = new[]
        {
            "https://whattomine.com/coins/1-btc-sha-256?hr=100.0&p=3500.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=1h&span_d=&commit=Calculate",
            "https://whattomine.com/coins/193-bch-sha-256?hr=100.0&p=3500.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=&commit=Calculate",
            "https://whattomine.com/coins/353-ethw-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=1h&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/361-octa-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/398-lrs-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/373-cau-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/378-btn-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/377-xpb-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/393-dogether-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/318-qkc-ethash?hr=1000&p=390.0&fee=3.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/283-clo-ethash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/162-etc-etchash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/382-egaz-etchash?hr=1000&p=390.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/4-ltc-scrypt?hr=10&p=2080.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=&commit=Calculate",
            "https://whattomine.com/coins/6-doge-scrypt?hr=10&p=2080.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/34-dash-x11?hr=1000.0&p=2850.0&fee=0.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
            "https://whattomine.com/coins/352-kas-kheavyhash?hr=1&p=3400.0&fee=5.0&cost=0.1&cost_currency=USD&hcost=0.0&span_br=&span_d=24&commit=Calculate",
        };

        foreach (var currency in currencies)
        {
            var html = new HttpClient()
                        .GetStringAsync(currency)
                        .GetAwaiter()
                        .GetResult()
                        .Replace("\r", "")
                        .Replace("\n", "")
                        ;

            var name = GetString(html, ["<h1>"]);
            var value = GetString(html, ["Please note that calculations", "Day", "$"]).Replace(",", "");
            var hashRateValue = GetString(html, ["id=\"hr\"", "value", "\""], "\"");
            var hashRate = GetString(html, ["id=\"hr\"", "value", "span", ">"]);
            var algorithm = GetString(html, ["Algorithm", "dd", ">"]);

            yield return new Mining
            {
                Currency = name,
                Value = decimal.Parse(value, CultureInfo.InvariantCulture),
                HashRate = $"{hashRateValue} {hashRate}",
                Algorithm = algorithm,
            };
        }
    }

    private static string GetString(string str, string[] path, string? end = "<")
    {
        foreach (var item in path)
        {
            str = str.Substring(str.IndexOf(item) + item.Length);
        }

        if (end == null)
        {
            return str;
        }

        return str.Substring(0, str.IndexOf(end)).Trim();
    }

    private class Chart
    {
        public string Currency { get; set; }
        public decimal Value { get; set; }
        public decimal DiffPercent { get; set; }
    }

    private class Mining
    {
        public string Currency { get; set; }
        public decimal Value { get; set; }
        public string HashRate { get; set; }
        public string Algorithm { get; set; }
    }
}

#endregion

#region NewsSender

public static class NewsSender
{
    public static void Send()
    {
        var message = Telegram.GetLastMessage();
        if (string.IsNullOrEmpty(message))
        {
            return;
        }

        message = MessageTemplate.Format(Rerait(message));
        var img = GetImg();

        Telegram.SendChannelMessage(message, img);
        Telegram.SendMessage("Отправил новость");
    }

    private static string GetImg()
    {
        const int imgsCount = 5;
        return $"https://the-best-mining.ru/img/tg-channel/tg-channel-news-{DateTime.Now.Ticks % imgsCount + 1}.jpg";
    }

    private static string Rerait(string mesasge)
    {
        var json = _jsonTemplate.Replace("{message}", FormatMessage(mesasge));

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

        return responseObject.result.alternatives[0].message.text;
    }

    private static string FormatMessage(string message)
    {
        return message
            .Replace("\n", " ")
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
      ""text"": ""сделай рерайт текста"",
      ""role"": ""system""
    },
    {
      ""text"": ""{message}"",
      ""role"": ""user""
    }
  ],
  ""completionOptions"": {
    ""stream"": false,
    ""maxTokens"": 500,
    ""temperature"": 1
  }
}
    ";
}

#endregion

#region PricesSender

public static class PricesSender
{
    public static void Send()
    {
        if (DateTime.UtcNow.Hour != Settings.PriceHour)
        {
            return;
        }

        var prices = LoadPrices();

        var message = MessageTemplate.Format(BuildMessage(prices));
        var img = GetImg();

        Telegram.SendChannelMessage(message, img);
        Telegram.SendMessage("Отправил цены");
    }

    private static string GetImg()
    {
        const int imgsCount = 3;
        return $"https://the-best-mining.ru/img/tg-channel/tg-channel-price-{DateTime.Now.Ticks % imgsCount + 1}.jpg";
    }

    private static string BuildMessage(Price[] prices)
    {
        var sb = new StringBuilder();

        var pricesByBrand = prices.GroupBy(x => x.Brand);

        foreach (var brandPrices in pricesByBrand)
        {
            sb.AppendLine($"💰 Цены на асики {brandPrices.Key} 💵");
            sb.AppendLine();

            foreach (var price in brandPrices)
            {
                sb.AppendLine($"🟢 {price.Model} {price.HashRate} - {price.Value.ToString("C", CultureInfo.CreateSpecificCulture("en-US"))} - {price.Delivery}");
            }

            sb.AppendLine();
        }

        sb.AppendLine("📲 Для заказа пишите нашему менеджеру @BestMiningManager");

        return sb.ToString();
    }

    private static Price[] LoadPrices()
    {
        var json = new HttpClient()
            .GetStringAsync("https://the-best-mining.ru/data/prices.json")
            .GetAwaiter()
            .GetResult();

        return JsonSerializer.Deserialize<Price[]>(json)!;
    }

    public class Price
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public string HashRate { get; set; }
        public int Value { get; set; }
        public string Delivery { get; set; }
    }
}

#endregion

#region MiningCalculator

public static class MiningCalculator
{
    public static string Send(string url)
    {
        return new HttpClient()
            .GetStringAsync($"https://whattomine.com/coins/{url}")
            .GetAwaiter()
            .GetResult()
            ;
    }
}

#endregion

#region Order

public static class Order
{
    public static void Send(string order)
    {
        Telegram.SendMessageToManager(MessageTemplate.Escape(order));
    }
}

#endregion

#region Common

public static class Utils
{
    public static void WithNotifyAboutError(System.Action action, string message)
    {
        try
        {
            action();
        }
        catch (Exception)
        {
            Telegram.SendMessage(message);
            throw;
        }
    }
}

public static class MessageTemplate
{
    public static string Format(string message)
    {
        return @$"{Escape(message).Trim()}

👉 [K1Pool](https://k1pool.com/invite/dd03779e65) \| [ByBit](https://www.bybit.com/invite?ref=ENN1VM8) \| [Прайс](https://t.me/BestMiningRu/8) \| [Заказ](https://t.me/BestMiningManager)";
    }

    public static string Escape(string message)
    {
        return message
        .Replace("=", "\\=")
        .Replace("-", "\\-")
        .Replace("+", "\\+")
        .Replace(".", "\\.")
        .Replace("|", "\\|")
        .Replace("(", "\\(")
        .Replace(")", "\\)")
        ;
    }
}

#endregion

#region Telegram

public static class Telegram
{
    private static Lazy<TelegramBotClient> _botClient;

    static Telegram()
    {
        _botClient = new Lazy<TelegramBotClient>(() => new TelegramBotClient(Settings.TgBotToken));
    }

    public static void SendChannelMessage(string message, string img)
    {
        _botClient.Value.SendPhotoAsync(
            chatId: Settings.TgChannelId,
            photo: InputFile.FromUri(img),
            caption: message,
            parseMode: ParseMode.MarkdownV2
        )
        .GetAwaiter()
        .GetResult();
    }

    public static void SendMessage(string message)
    {
        _botClient.Value.SendTextMessageAsync(
            chatId: Settings.TgChatId,
            text: message,
            parseMode: ParseMode.MarkdownV2
        )
        .GetAwaiter()
        .GetResult();
    }

    public static void SendMessageToManager(string message)
    {
        _botClient.Value.SendTextMessageAsync(
            chatId: Settings.TgManagerChatId,
            text: message,
            parseMode: ParseMode.MarkdownV2
        )
        .GetAwaiter()
        .GetResult();
    }

    public static string? GetLastMessage()
    {
        var start = DateTime.UtcNow.AddHours(-1);
        return (_botClient.Value.GetUpdatesAsync().GetAwaiter().GetResult())
            .Select(x => x.Message!)
            .Where(x => x?.From?.Username == Settings.TgUserName)
            .Where(x => x.ForwardFromMessageId != null)
            .Where(x => x.Date >= start)
            .OrderByDescending(x => x.Date)
            .FirstOrDefault()?
            .Caption;
    }

    public static string? GetLastMessageChatId()
    {
        return (_botClient.Value.GetUpdatesAsync().GetAwaiter().GetResult())
            .Select(x => x.Message!)
            .OrderByDescending(x => x.Date)
            .FirstOrDefault()?
            .Chat.Id.ToString();
    }
}

#endregion

#region Base

public static class Settings
{
    public static string TgBodId => Get("TgBotId");
    public static string TgBotToken => Get("TgBotToken");
    public static string TgChannelId => Get("TgChannelId");
    public static string TgChatId => Get("TgChatId");
    public static string TgManagerChatId => Get("TgManagerChatId");
    public static string TgUserName => Get("TgUserName");
    public static string YaIamToken => Get("YaIamToken");
    public static string YaFolderId => Get("YaFolderId");
    public static int ChartHour => GetInt("ChartHour");
    public static int PriceHour => GetInt("PriceHour");

    private static string Get(string name) => Environment.GetEnvironmentVariable(name)!;
    private static int GetInt(string name) => int.Parse(Get(name)!);
}

public abstract class HandlerBase
{
    public Response FunctionHandler(string body)
    {
        Logger.Debug(body);

        var request = GetRequest(body);

        if (IsCors(request))
        {
            return CorsOk();
        }

        var response = HandleRequest(request);
        return new Response(200, response);
    }

    private Response CorsOk()
    {
        return new Response(200, "{}");
    }

    private bool IsCors(Request request)
    {
        return request.httpMethod == "OPTIONS";
    }

    private string HandleRequest(Request request)
    {
        var requestData = Parse(request.body);
        return HandleRequest(request.body, requestData);
    }

    protected abstract string HandleRequest(string request, RequestData? requestData);

    private Request GetRequest(string body)
    {
        return body.Contains("httpMethod")
                ? JsonSerializer.Deserialize<Request>(body)!
                : new Request { body = body, };
    }

    private RequestData? Parse(string body)
    {
        try
        {
            var requestDataDto = JsonSerializer.Deserialize<RequestDataDto>(ExtractBody(body))!;

            return new RequestData
            {
                Action = Enum.Parse<Action>(requestDataDto.Action),
                Command = requestDataDto.Command,
            };
        }
        catch (Exception)
        {
            return null;
        }
    }

    private string ExtractBody(string body)
    {
        try
        {
            return Encoding.UTF8.GetString(Convert.FromBase64String(body));
        }
        catch (Exception)
        {
            return body;
        }
    }

    protected string SafeExecute(Func<string> func, Func<string>? onError = null)
    {
        try
        {
            return func();
        }
        catch (Exception e)
        {
            Logger.Log(e.Message);
            Logger.Log(e.StackTrace!);

            return onError?.Invoke() ?? "Sorry! I have an error(";
        }
    }
}

public enum Action
{
    Send,
    CalculateMining,
    Order,
}

public class Request
{
    public string httpMethod { get; set; } = null!;
    public string body { get; set; } = null!;
}

public class RequestData
{
    public Action Action { get; set; }

    public string Command { get; set; } = null!;
}

public class RequestDataDto
{
    public string Action { get; set; } = null!;

    public string Command { get; set; } = null!;
}

public class Response
{
    public Response(int statusCode, string body)
    {
        StatusCode = statusCode;
        Body = body;
    }

    public int StatusCode { get; set; }
    public string Body { get; set; }

    public Dictionary<string, string> Headers { get; } = new Dictionary<string, string>
        {
            {"Access-Control-Allow-Headers", "*"},
            {"Access-Control-Allow-Methods", "*"},
            {"Access-Control-Allow-Origin", "*"},
        };
}

public static class Logger
{
    public static bool IsDebug { get; set; }

    public static void Debug(string message)
    {
        if (IsDebug)
        {
            Console(message);
        }
    }

    public static void Console(string message)
    {
        message = $"{DateTime.Now} - {message}";

        System.Console.WriteLine(message);
    }

    public static void Log(string message)
    {
        Console(message);
    }
}

#endregion
