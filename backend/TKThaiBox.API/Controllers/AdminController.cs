using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    private readonly IAdminService _adminService;

    public AdminController(IAdminService adminService)
    {
        _adminService = adminService;
    }

    [HttpGet("payment-status")]
    public async Task<ActionResult<IEnumerable<AdminPaymentStatusDTO>>> GetPaymentStatus()
    {
        var result = await _adminService.GetPaymentStatusAsync();
        return Ok(result);
    }
}