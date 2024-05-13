using System.Text.Encodings.Web;
using System.Text.Json;

namespace BestMiningTgChannel.Tests;

public static class Utils
{
    public static string ToJson(this object obj)
    {
        var options = new JsonSerializerOptions
        {
            Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
            WriteIndented = true
        };

        return JsonSerializer.Serialize(obj, options);
    }
}
