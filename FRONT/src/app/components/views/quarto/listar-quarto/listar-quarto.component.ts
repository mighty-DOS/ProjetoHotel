import { Component, OnInit } from "@angular/core";
import { Quarto } from "src/app/models/quarto";
import { QuartoService } from "src/app/services/quarto.service";

@Component({
    selector: "app-listar-quarto",
    templateUrl: "./listar-quarto.component.html",
    styleUrls: ["./listar-quarto.component.css"],
})
export class ListarQuartoComponent implements OnInit {
    quartos: Quarto[] = [];
    colunasExibidas: String[] = [
        "id",
        "nome",
        "descricao",
        "disponivel",
        "preco",
        "categoria",
    ];

    constructor(private service: QuartoService) {}

    ngOnInit(): void {
        this.service.list().subscribe((quartos) => {
            this.quartos = quartos;
        });
    }
}
