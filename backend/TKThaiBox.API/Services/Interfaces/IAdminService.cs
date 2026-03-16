public interface IAdminService
{
    Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync();
}