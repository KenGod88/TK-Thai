public class AdminPaymentStatusDTO
{
    public int MemberId { get; set; }

    public string Name { get; set; } = "";

    public bool MonthPaid { get; set; }

    public DateTime BoxLicenseValidUntil { get; set; }
}