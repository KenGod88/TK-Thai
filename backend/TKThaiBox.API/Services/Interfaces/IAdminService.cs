public interface IAdminService
{
    Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync(int? year, int? month);
    Task<IEnumerable<AdminMemberOverviewDTO>> GetAllMembersOverviewAsync();

    Task<bool> MarkPaymentAsync(int memberId);
    Task UpdateLicenseAsync(int memberId, DateTime? validUntil);
}