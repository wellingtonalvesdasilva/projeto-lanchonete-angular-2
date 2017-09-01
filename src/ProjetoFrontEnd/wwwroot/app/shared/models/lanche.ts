import { Porcao } from '../../shared/models/porcao';

export class Lanche {
    nome: string;
    id: number;
    valor: number;
    porcoes: Porcao[];
}
