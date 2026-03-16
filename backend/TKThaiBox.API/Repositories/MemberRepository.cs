using Microsoft.EntityFrameworkCore;

public class MemberRepository : IMemberRepository
{
    private readonly AppDbContext _context;

    public MemberRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Member>> GetAllMembersAsync()
    {
        return await _context.Members.ToListAsync();
    }

    public async Task<Member?> GetMemberByIdAsync(int id)
    {
        return await _context.Members
        .Include(m => m.Payments)
        .FirstOrDefaultAsync(m => m.Id == id);
    }

    public async Task AddMemberAsync(Member member)
    {
        _context.Members.Add(member);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateMemberAsync(Member member)
    {
        _context.Entry(member).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteMemberAsync(int id)
    {
        var member = await _context.Members.FindAsync(id);
        if (member != null)
        {
            _context.Members.Remove(member);
            await _context.SaveChangesAsync();
        }
    }
}