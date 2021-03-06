using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd_Prueba.Models;

namespace BackEnd_Prueba.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public CarController(AplicationDBContext context)
        {
            _context = context;

        }


        // GET: api/Car
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<CarModel>>> GetCar()
        {
            return await _context.Car.ToListAsync();
        }
              

        // POST: api/Car
        [HttpPost]
        public async Task<ActionResult<CarModel>> PostCar(CarModel car)
        {
            _context.Car.Add(car);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCar", new { id = car.Id }, car);
        }

        // DELETE: api/Car/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CarModel>> DeleteCar(int id)
        {
            var car = await _context.Car.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Car.Remove(car);
            await _context.SaveChangesAsync();

            return car;
        }

        private bool CarExists(int id)
        {
            return _context.Car.Any(e => e.Id == id);
        }
    }
}
