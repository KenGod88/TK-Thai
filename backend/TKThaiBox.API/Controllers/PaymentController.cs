using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly IPaymentService _paymentService;

    public PaymentsController(IPaymentService paymentService)
    {
        _paymentService = paymentService;
    }

    [HttpPost("{memberId}/pay-month")]
    public async Task<IActionResult> PayCurrentMonth(int memberId)
    {
        var result = await _paymentService.RegisterCurrentMonthPaymentAsync(memberId);

        if (!result)
            return BadRequest("Heeft al een betaling voor deze maand plaatsgevonden");

        return Ok("Betaling succesvol geregistreerd");
    }
}