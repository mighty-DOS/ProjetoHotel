import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarrinhoComponent } from "./components/views/home/carrinho/carrinho.component";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarQuartoComponent } from "./components/views/quarto/cadastrar-quarto/cadastrar-quarto.component";
import { ListarQuartoComponent } from "./components/views/quarto/listar-quarto/listar-quarto.component";

const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "home/carrinho",
        component: CarrinhoComponent,
    },
    {
        path: "quarto/listar",
        component: ListarQuartoComponent,
    },
    {
        path: "quarto/cadastrar",
        component: CadastrarQuartoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
