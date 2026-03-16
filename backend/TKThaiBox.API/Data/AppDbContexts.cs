using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }

    public DbSet<Member> Members { get; set; }

    public DbSet<Payment> Payments { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Member>()
            .HasOne(m => m.User)
            .WithOne(u => u.Member)
            .HasForeignKey<Member>(m => m.UserId);

        modelBuilder.Entity<Payment>()
            .HasIndex(p => new { p.MemberId, p.Year, p.Month })
            .IsUnique();

        modelBuilder.Entity<Payment>()
        .ToTable(t =>
            t.HasCheckConstraint("CK_Payment_Month", "\"Month\" >= 1 AND \"Month\" <= 12"));

        modelBuilder.Entity<Payment>()
            .HasIndex(p => p.MemberId);
    }
}