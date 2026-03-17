using Microsoft.AspNetCore.Identity;
using TKThaiBox.API.Services.Interfaces;

public class AuthService : IAuthService
{
    private readonly IUserRepository _userRepo;
    private readonly PasswordHasher<User> _hasher;
    private readonly JwtService _jwt;

    public AuthService(
        IUserRepository userRepo,
        JwtService jwt)
    {
        _userRepo = userRepo;
        _jwt = jwt;
        _hasher = new PasswordHasher<User>();
    }

    public async Task<LoginResponseDTO?> LoginAsync(LoginDTO dto)
    {
        var user = await _userRepo.GetByEmailAsync(dto.Email);

        if (user == null)
            return null;

        var result = _hasher.VerifyHashedPassword(
            user,
            user.PasswordHash,
            dto.Password
        );

        if (result == PasswordVerificationResult.Failed)
            return null;

        var token = _jwt.GenerateToken(user);

        return new LoginResponseDTO
        {
            AccessToken = token,
            Role = user.Role,
            Name = user.Member != null
                ? $"{user.Member.FirstName} {user.Member.LastName}"
                : user.Username
        };
    }

   public async Task RegisterAsync(RegisterDTO dto)
{
    var user = new User
    {
        Username = dto.Username,
        Email = dto.Email,
        Role = "Member"
    };

    user.PasswordHash = _hasher.HashPassword(user, dto.Password);


    user.Member = new Member
    {
        FirstName = dto.FirstName,
        LastName = dto.LastName,
        JoinedAt = DateTime.UtcNow,
        BoxLicenseValidUntil = null
    };

    await _userRepo.AddAsync(user);
}
}