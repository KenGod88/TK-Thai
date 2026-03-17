using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/member")]
public class MemberController : ControllerBase
{
    private readonly IMemberService _memberService;

    public MemberController(IMemberService memberService)
    {
        _memberService = memberService;
    }

    // GET: api/member
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDTO>>> GetMembers()
    {
        var members = await _memberService.GetAllMembersAsync();
        return Ok(members);
    }

    // GET: api/member/5
    [HttpGet("{id}")]
    public async Task<ActionResult<MemberDTO>> GetMember(int id)
    {
        var member = await _memberService.GetMemberByIdAsync(id);

        if (member == null)
            return NotFound();

        return Ok(member);
    }

    // POST: api/member
    [HttpPost]
    public async Task<IActionResult> CreateMember(CreateMemberDTO dto)
    {
        await _memberService.AddMemberAsync(dto);
        return Created("", null);
    }

    // PUT: api/member/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMember(int id, CreateMemberDTO dto)
    {
        try
        {
            await _memberService.UpdateMemberAsync(id, dto);
            return NoContent();
        }
        catch (Exception)
        {
            return NotFound();
        }
    }

    // DELETE: api/member/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMember(int id)
    {
        await _memberService.DeleteMemberAsync(id);
        return NoContent();
    }

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> GetMyDashboard()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);

        if (userIdClaim == null)
            return Unauthorized();

        var userId = int.Parse(userIdClaim.Value);

        var result = await _memberService.GetMyDashboardAsync(userId);

        if (result == null)
            return NotFound();

        return Ok(result);
    }

    [HttpGet("/api/member/payment-status")]
    public async Task<ActionResult<IEnumerable<AdminPaymentStatusDTO>>> GetPaymentStatus()
    {
        var result = await _memberService.GetPaymentStatusAsync();
        return Ok(result);
    }
}