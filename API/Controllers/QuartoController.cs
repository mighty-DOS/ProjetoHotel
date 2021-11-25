using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/quarto")]
    public class QuartoController : ControllerBase
    {
        private readonly DataContext _context;
        public QuartoController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Quarto quarto)
        {
            quarto.Categoria = _context.Categorias.Find(quarto.CategoriaId);
            _context.Quartos.Add(quarto);
            _context.SaveChanges();
            return Created("", quarto);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() =>
            Ok(_context.Quartos
            .Include(p => p.Categoria)
            .ToList());

        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Quarto quarto = _context.Quartos.Find(id);
            if (quarto == null)
            {
                return NotFound();
            }
            return Ok(quarto);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {

            Quarto quarto = _context.Quartos.FirstOrDefault(quarto => quarto.Nome == name);

            if (quarto == null)
            {
                return NotFound();
            }
            _context.Quartos.Remove(quarto);
            _context.SaveChanges();
            return Ok(_context.Quartos.ToList());
        }

        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Quarto quarto)
        {
            _context.Quartos.Update(quarto);
            _context.SaveChanges();
            return Ok(quarto);
        }
    }
}