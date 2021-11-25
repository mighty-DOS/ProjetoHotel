import { QuartoService } from './../../../../services/quarto.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemVenda } from "src/app/models/item-venda";
import { Quarto } from "src/app/models/quarto";
import { ItemService } from "src/app/services/item.service";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    quartos: Quarto[] = [];

    constructor(
        private quartoService: QuartoService,
        private itemService: ItemService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.quartoService.list().subscribe((quartos) => {
            this.quartos = quartos;
        });
    }

    adicionar(quarto: Quarto): void {
        let item: ItemVenda = {
            quarto: quarto,
            quartoId: quarto.id!,
            quantidade: 1,
            preco: quarto.preco,
            carrinhoId: localStorage.getItem("carrinhoId")! || "",
        };
        this.itemService.create(item).subscribe((item) => {
            localStorage.setItem("carrinhoId", item.carrinhoId);
            this.router.navigate(["home/carrinho"]);
        });
    }
}
