public class Member
{
    public int Id { get; set; }
    public int UserId { get; set; }

    public string FirstName { get; set; } = "";

    public string LastName { get; set; } = "";

    public DateTime JoinedAt { get; set; } = DateTime.UtcNow;
    public DateTime? BoxLicenseValidUntil { get; set; }
    public User? User { get; set; }
    public ICollection<Payment> Payments { get; set; } = new List<Payment>();
}