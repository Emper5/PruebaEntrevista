using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd_Prueba.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Brand = table.Column<string>(type: "varchar(30)", nullable: false),
                    Model = table.Column<string>(type: "varchar(30)", nullable: false),
                    Year = table.Column<string>(type: "varchar(4)", nullable: false),
                    Price = table.Column<string>(type: "varchar(30)", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");
        }
    }
}
