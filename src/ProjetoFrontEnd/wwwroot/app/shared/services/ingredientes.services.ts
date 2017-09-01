import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Ingrediente } from '../../shared/models/ingrediente';
import { RequestOptions } from '@angular/http';

@Injectable()
export class IngredienteService {
    private apiUrl = 'http://localhost:12856/api/ingrediente';

    constructor(private http: Http) { }

    getIngredientes(): Promise<Ingrediente[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Ingrediente[])
            .catch(this.handleError);
    }

    getIngrediente(id: number): Promise<Ingrediente> {
        return this.getIngredientes()
            .then(ingredientes => ingredientes.find(ingrediente => ingrediente.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message || error);
    }
}
