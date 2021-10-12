using BackEnd_Prueba.Authentication;
using BackEnd_Prueba.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BackEnd_Prueba.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IJwtAuthenticationManager Manager;
        public AuthController(IJwtAuthenticationManager authenticationManager)
        {
           Manager = authenticationManager;
        }
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]UserModel user)
        {
            try
            {
                if (user == null)
                    return BadRequest("Invalid client request");
                var token = Manager.Authenticate(user.UserName, user.PassWord);
                if (token != null)
                {
                   return  Ok(new { Token = token });

                } else
                {
                    throw new UnauthorizedAccessException();
                }

            }
            catch
            {

                return Unauthorized();
            }
        
           
        
        }
    }
}
