using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace BackEnd_Prueba.Models
{
    public class CarModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName ="varchar(30)")]
        public string Brand { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Model { get; set; }

        [Required]
        [Column(TypeName = "varchar(4)")]
        public string Year { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Price { get; set; }
    }
}
