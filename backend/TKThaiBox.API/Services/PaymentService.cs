public class PaymentService : IPaymentService
{
    private readonly IPaymentRepository _paymentRepository;

    public PaymentService(IPaymentRepository paymentRepository)
    {
        _paymentRepository = paymentRepository;
    }

    public async Task<bool> RegisterCurrentMonthPaymentAsync(int memberId)
    {
        var now = DateTime.UtcNow;

        var exists = await _paymentRepository.PaymentExistsAsync(memberId, now.Year, now.Month);

        if (exists)
            return false;

        var payment = new Payment
        {
            MemberId = memberId,
            Year = now.Year,
            Month = now.Month,
            Amount = 40,
            PaymentDate = now
        };

        await _paymentRepository.AddPaymentAsync(payment);

        return true;
    }

}
