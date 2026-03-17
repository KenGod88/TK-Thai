using Microsoft.AspNetCore.Mvc;
using TKThaiBox.API.Services.Interfaces;
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDTO dto)
    {
        var result = await _authService.LoginAsync(dto);

        if (result == null)
            return Unauthorized();

        return Ok(result);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDTO dto)
    {
        await _authService.RegisterAsync(dto);
        return Ok();
    }
}
