public interface IMemberRepository
{
    Task<IEnumerable<Member>> GetAllMembersAsync();
    Task<Member?> GetMemberByIdAsync(int id);
    Task AddMemberAsync(Member member);
    Task UpdateMemberAsync(Member member);
    Task DeleteMemberAsync(int id);
    Task<Member?> GetByUserIdAsync(int userId);
}