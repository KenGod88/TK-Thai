using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class MemberController : ControllerBase
{
    private readonly AppDbContext _db;

    public MemberController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<List<Member>>> GetAll()
    {
        var members = await _db.Members
            .Include(m => m.User)
            .ToListAsync();
        return Ok(members);
    }
}