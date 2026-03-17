using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

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
public async Task<IActionResult> GetPaymentStatus(
    [FromQuery] int? year,
    [FromQuery] int? month)
{
    var result = await _adminService.GetPaymentStatusAsync(year, month);
    return Ok(result);
}

[Authorize(Roles = "Admin")]
[HttpPost("mark-payment")]
public async Task<IActionResult> MarkPayment([FromBody] MarkPaymentDTO dto)
{
    var success = await _adminService.MarkPaymentAsync(dto.MemberId);

    if (!success)
        return BadRequest("Payment for this month already exists");

    return Ok(new { message = "Payment registered" });
}

[Authorize(Roles = "Admin")]
[HttpPut("license")]
public async Task<IActionResult> UpdateLicense([FromBody] UpdateLicenseDTO dto)
{
    await _adminService.UpdateLicenseAsync(dto.MemberId, dto.ValidUntil);
    return Ok();
}
}