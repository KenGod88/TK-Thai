public interface IMemberService
{
    Task<IEnumerable<MemberDTO>> GetAllMembersAsync();
    Task<MemberDTO?> GetMemberByIdAsync(int id);
    Task AddMemberAsync(CreateMemberDTO dto);
    Task UpdateMemberAsync(int id, CreateMemberDTO dto);
    Task DeleteMemberAsync(int id);
    Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync();
    Task<MemberDashboardDTO?> GetMyDashboardAsync(int userId);
}