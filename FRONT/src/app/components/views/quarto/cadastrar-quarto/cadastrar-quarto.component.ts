import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "src/app/models/categoria";
import { Quarto } from "src/app/models/quarto";
import { CategoriaService } from "src/app/services/categoria.service";
import { QuartoService } from "src/app/services/quarto.service";

@Component({
    selector: "app-cadastrar-quarto",
    templateUrl: "./cadastrar-quarto.component.html",
    styleUrls: ["./cadastrar-quarto.component.css"],
})
export class CadastrarQuartoComponent implements OnInit {
    nome!: string;
    descricao!: string;
    disponivel!: number;
    preco!: number;
    categorias!: Categoria[];
    categoriaId!: number;

    constructor(
        private router: Router,
        private produtoService: QuartoService,
        private categoriaService: CategoriaService
    ) {}

    ngOnInit(): void {
        this.categoriaService.list().subscribe((categorias) => {
            this.categorias = categorias;
        });
    }

    cadastrar(): void {
        let quarto: Quarto = {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            disponivel: this.disponivel,
            categoriaId: this.categoriaId,
        };
        this.produtoService.create(quarto).subscribe((quarto) => {
            console.log(quarto);
            this.router.navigate(["quarto/listar"]);
        });
    }
}
