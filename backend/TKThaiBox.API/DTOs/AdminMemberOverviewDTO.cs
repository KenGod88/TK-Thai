public class AdminMemberOverviewDTO
{
    public int MemberId { get; set; }
    public string Name { get; set; } = "";

    public bool MonthPaid { get; set; }

    public DateTime? BoxLicenseValidUntil { get; set; }
    public bool HasValidLicense { get; set; }
}