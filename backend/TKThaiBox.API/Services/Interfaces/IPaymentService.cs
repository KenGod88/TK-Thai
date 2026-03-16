public interface IPaymentService
{
    Task<bool> RegisterCurrentMonthPaymentAsync(int memberId);
}