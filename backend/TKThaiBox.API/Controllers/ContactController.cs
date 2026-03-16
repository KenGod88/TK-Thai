using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly EmailService _emailService;

    public ContactController(EmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendContact([FromBody] ContactRequest request)
    {
        await _emailService.SendEmail(request);

        return Ok(new { message = "Message sent" });
    }
}