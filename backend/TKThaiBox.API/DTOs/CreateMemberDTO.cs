public class CreateMemberDTO
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime? BoxLicenseValidUntil { get; set; }
    public bool HasValidLicense { get; set; }
}