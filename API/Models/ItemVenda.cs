using System;

namespace API.Models
{
    public class ItemVenda
    {
        public ItemVenda() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public Quarto Quarto { get; set; }
        public int QuartoId { get; set; }
        public int Quantidade { get; set; }
        public double Preco { get; set; }
        public string CarrinhoId { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}