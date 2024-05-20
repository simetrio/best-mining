using System.Security.Cryptography;
using System.Text;
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

     public static T ToObject<T>(this string str)
    {
        return JsonSerializer.Deserialize<T>(str);
    }

    public static string CalculateHash(this string str, int length = int.MaxValue)
    {
        var sha256 = SHA256.Create();
        var hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(str));
        return Convert
            .ToBase64String(hashBytes)
            .Replace("/", "")
            .ToLower()
            .SubstringIfNeed(0, length);
    }

    public static string SubstringIfNeed(this string str, int start, int length)
    {
        str = str.Substring(0);
        return str.Length > length ? str.Substring(0, length) : str;
    }
}
