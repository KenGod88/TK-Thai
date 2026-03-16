public interface IAdminRepository
{
    Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync();
}