import { Quarto } from "./quarto";

export interface ItemVenda {
    id?: number;
    quarto: Quarto;
    quartoId: number;
    quantidade: number;
    preco: number;
    carrinhoId: string;
    criadoEm?: Date;
}
