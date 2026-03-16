public class AdminService : IAdminService
{
    private readonly IAdminRepository _adminRepository;

    public AdminService(IAdminRepository adminRepository)
    {
        _adminRepository = adminRepository;
    }

    public async Task<IEnumerable<AdminPaymentStatusDTO>> GetPaymentStatusAsync()
    {
        return await _adminRepository.GetPaymentStatusAsync();
    }
}