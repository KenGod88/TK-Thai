using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TKThaiBox.API.Migrations
{
    /// <inheritdoc />
    public partial class AddMonthConstraint : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddCheckConstraint(
                name: "CK_Payment_Month",
                table: "Payments",
                sql: "\"Month\" >= 1 AND \"Month\" <= 12");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "CK_Payment_Month",
                table: "Payments");
        }
    }
}
