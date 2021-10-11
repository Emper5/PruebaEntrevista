
namespace BackEnd_Prueba
{
    public interface IJwtAuthenticationManager
    {
        string Authenticate(string username, string password);
    }
}
