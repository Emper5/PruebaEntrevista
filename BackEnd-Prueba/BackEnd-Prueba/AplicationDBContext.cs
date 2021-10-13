using BackEnd_Prueba.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd_Prueba
{
    public class AplicationDBContext: DbContext
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options): base(options) 
        {

        }
        public DbSet<CarModel> Car { get; set; }
    }
}
