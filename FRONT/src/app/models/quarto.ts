import { Categoria } from "./categoria";

export interface Quarto {
    id?: number;
    nome: string;
    descricao: string;
    disponivel: number;
    preco: number;
    criadoem?: string;
    categoriaId: number;
    categoria?: Categoria;
}
