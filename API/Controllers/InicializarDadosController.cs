using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { Id = 1, Nome = "Categoria 1" },
                }
            );
            _context.Quartos.AddRange(new Quarto[]
                {
                    new Quarto { Id = 1, Nome = "Quarto 1", Preco = 1, disponivel = 1, CategoriaId = 1 },
                    new Quarto { Id = 2, Nome = "Quarto 2", Preco = 2, disponivel = 1, CategoriaId = 1 },
                    new Quarto { Id = 3, Nome = "Quarto 3", Preco = 3, disponivel = 1, CategoriaId = 1 },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}