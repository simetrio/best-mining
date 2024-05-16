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

    public static string CalculateHash(this string str, int length)
    {
        var sha256 = SHA256.Create();
        var hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(str));
        return Convert.ToBase64String(hashBytes).Trim('/').ToLower().Substring(0, length);
    }
}
