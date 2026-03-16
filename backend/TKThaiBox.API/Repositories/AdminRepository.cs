using Microsoft.EntityFrameworkCore;

public class AdminRepository : IAdminRepository
{
    private readonly AppDbContext _db;

    public AdminRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync()
    {
        var now = DateTime.UtcNow;

        return await _db.Members
            .Select(m => new AdminPaymentStatusDTO
            {
                MemberId = m.Id,
                Name = m.FirstName + " " + m.LastName,
                BoxLicenseValidUntil = m.BoxLicenseValidUntil,
                MonthPaid = m.Payments.Any(p =>
                    p.Year == now.Year &&
                    p.Month == now.Month)
            })
            .ToListAsync();
    }
}