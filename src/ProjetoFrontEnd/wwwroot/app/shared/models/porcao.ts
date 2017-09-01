import { Ingrediente } from '../../shared/models/ingrediente';

export class Porcao {
    id: number;
    quantidade: number;
    ingredienteId: number;
    ingrediente: Ingrediente;
}