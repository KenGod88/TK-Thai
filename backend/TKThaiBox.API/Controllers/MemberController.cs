using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class MemberController : ControllerBase
{
    private readonly IMemberService _memberService;

    public MemberController(IMemberService memberService)
    {
        _memberService = memberService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Member>>> GetAllMembers()
    {
        var members = await _memberService.GetAllMembersAsync();
        return Ok(members);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Member>> GetMemberById(int id)
    {
        var member = await _memberService.GetMemberByIdAsync(id);
        if (member == null)
        {
            return NotFound();
        }
        return Ok(member);
    }

    [HttpPost]
    public async Task<ActionResult> AddMember(Member member)
    {
        await _memberService.AddMemberAsync(member);
        return CreatedAtAction(nameof(GetMemberById), new { id = member.Id }, member);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateMember(int id, Member member)
    {
        if (id != member.Id)
        {
            return BadRequest();
        }

        try
        {
            await _memberService.UpdateMemberAsync(member);
            return NoContent();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (await _memberService.GetMemberByIdAsync(id) == null)
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteMember(int id)
    {
        var existingMember = await _memberService.GetMemberByIdAsync(id);
        if (existingMember == null)
        {
            return NotFound();
        }

        await _memberService.DeleteMemberAsync(id);
        return NoContent();
    }
}
