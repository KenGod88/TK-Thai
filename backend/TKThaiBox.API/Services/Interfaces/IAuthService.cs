namespace TKThaiBox.API.Services.Interfaces;
public interface IAuthService
{
    Task<LoginResponseDTO?> LoginAsync(LoginDTO dto);
    Task RegisterAsync(RegisterDTO dto);
}