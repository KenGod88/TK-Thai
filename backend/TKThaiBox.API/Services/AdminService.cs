public class AdminService : IAdminService
{
    private readonly IAdminRepository _adminRepository;
    private readonly IUserRepository _userRepository;
    private readonly IMemberRepository _memberRepository;
    private readonly IPaymentService _paymentService;

    public AdminService(IAdminRepository adminRepository, IUserRepository userRepository, IMemberRepository memberRepository, IPaymentService paymentService)
    {
        _adminRepository = adminRepository;
        _userRepository = userRepository;
        _memberRepository = memberRepository;
        _paymentService = paymentService;
    }

    public async Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync()
    {
        return await _adminRepository.GetPaymentStatusAsync();
    }

     public async Task<List<UserDTO>> GetAllUsersAsync()
    {
        var users = await _userRepository.GetAllWithMemberAsync();

        return users.Select(u => new UserDTO
        {
            Id = u.Id,
            Username = u.Username,
            Email = u.Email,
            Role = u.Role,
            FullName = u.Member != null
                ? $"{u.Member.FirstName} {u.Member.LastName}"
                : null
        }).ToList();
    }

    public async Task<bool> MarkPaymentAsync(int memberId)
    {
        return await _paymentService.RegisterCurrentMonthPaymentAsync(memberId);
    }

    public async Task<IEnumerable<AdminMemberOverviewDTO>> GetAllMembersOverviewAsync()
    {
    var members = await _memberRepository.GetAllMembersAsync();
    var now = DateTime.UtcNow;

    return members.Select(m => new AdminMemberOverviewDTO
    {
        MemberId = m.Id,
        Name = $"{m.FirstName} {m.LastName}",

        MonthPaid = m.Payments.Any(p =>
            p.Year == now.Year &&
            p.Month == now.Month),

        BoxLicenseValidUntil = m.BoxLicenseValidUntil,

        HasValidLicense = m.BoxLicenseValidUntil != null &&
                          m.BoxLicenseValidUntil > now
    });
    }

    public async Task UpdateLicenseAsync(int memberId, DateTime? validUntil)
{
    var member = await _memberRepository.GetMemberByIdAsync(memberId);

    if (member == null)
        throw new Exception("Member not found");

    member.BoxLicenseValidUntil = validUntil?.ToUniversalTime();

    await _memberRepository.UpdateMemberAsync(member);
}
}