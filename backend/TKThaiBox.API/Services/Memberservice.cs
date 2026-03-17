public class MemberService : IMemberService
{
    private readonly IMemberRepository _memberRepository;

    public MemberService(IMemberRepository memberRepository)
    {
        _memberRepository = memberRepository;
    }

    public async Task<IEnumerable<MemberDTO>> GetAllMembersAsync()
    {
        var members = await _memberRepository.GetAllMembersAsync();

        return members.Select(m => new MemberDTO
        {
            Id = m.Id,
            FirstName = m.FirstName,
            LastName = m.LastName,
            BoxLicenseValidUntil = m.BoxLicenseValidUntil
        });
    }

    public async Task<MemberDTO?> GetMemberByIdAsync(int id)
    {
        var member = await _memberRepository.GetMemberByIdAsync(id);

        if (member == null)
            return null;

        return new MemberDTO
        {
            Id = member.Id,
            FirstName = member.FirstName,
            LastName = member.LastName,
            BoxLicenseValidUntil = member.BoxLicenseValidUntil
        };
    }

    public async Task AddMemberAsync(CreateMemberDTO dto)
    {
        var member = new Member
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            BoxLicenseValidUntil = dto.BoxLicenseValidUntil
        };

        await _memberRepository.AddMemberAsync(member);
    }

    public async Task UpdateMemberAsync(int id, CreateMemberDTO dto)
    {
        var member = await _memberRepository.GetMemberByIdAsync(id);

        if (member == null)
            throw new Exception("Member not found");

        member.FirstName = dto.FirstName;
        member.LastName = dto.LastName;
        member.BoxLicenseValidUntil = dto.BoxLicenseValidUntil;

        await _memberRepository.UpdateMemberAsync(member);
    }

    public async Task DeleteMemberAsync(int id)
    {
        await _memberRepository.DeleteMemberAsync(id);
    }

    public async Task<MemberDashboardDTO?> GetMyDashboardAsync(int userId)
{
    var member = await _memberRepository.GetByUserIdAsync(userId);

    if (member == null)
        return null;

    var now = DateTime.UtcNow;

    return new MemberDashboardDTO
    {
        Name = $"{member.FirstName} {member.LastName}",
        MonthPaid = member.Payments.Any(p =>
            p.Year == now.Year &&
            p.Month == now.Month),
        BoxLicenseValidUntil = member.BoxLicenseValidUntil,
        HasValidLicense = member.BoxLicenseValidUntil != null &&
                          member.BoxLicenseValidUntil > now
    };
}

    public async Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync()
{
    var members = await _memberRepository.GetAllMembersAsync();

    var now = DateTime.UtcNow;

    return members.Select(m => new AdminPaymentStatusDTO
    {
        MemberId = m.Id,
        Name = $"{m.FirstName} {m.LastName}",
        MonthPaid = m.Payments.Any(p =>
            p.Year == now.Year &&
            p.Month == now.Month),
            BoxLicenseValidUntil = m.BoxLicenseValidUntil
    });
}
}