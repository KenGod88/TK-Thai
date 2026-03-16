using Microsoft.EntityFrameworkCore;

public class PaymentRepository : IPaymentRepository
{
    private readonly AppDbContext _db;

    public PaymentRepository(AppDbContext db)
    {
        _db = db;
    }

    public async Task<bool> PaymentExistsAsync(int memberId, int year, int month)
    {
        return await _db.Payments.AnyAsync(p =>
            p.MemberId == memberId &&
            p.Year == year &&
            p.Month == month);
    }

    public async Task AddPaymentAsync(Payment payment)
    {
        await _db.Payments.AddAsync(payment);
        await _db.SaveChangesAsync();
    }
}