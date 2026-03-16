public interface IPaymentRepository
{
    Task<bool> PaymentExistsAsync(int memberId, int year, int month);

    Task AddPaymentAsync(Payment payment);
}