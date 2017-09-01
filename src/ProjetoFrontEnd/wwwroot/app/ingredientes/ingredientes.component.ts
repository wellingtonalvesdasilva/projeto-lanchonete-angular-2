import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingrediente } from '../shared/models/ingrediente';
import { IngredienteService } from '../shared/services/ingredientes.services';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'my-ingrediente',
    templateUrl: 'ingredientes.component.html',
    styleUrls: ['ingredientes.component.css']
})

export class IngredientesComponent implements OnInit {
    ingredientes: Ingrediente[];
    error: any;

    constructor(
        private router: Router,
        private ingredienteService: IngredienteService)
    { }

    getIngredientes(): void {
        this.ingredienteService
            .getIngredientes()
            .then(ingredientes =>
                this.ingredientes = ingredientes
            )
            .catch(error => this.error = error);
    }

    ngOnInit(): void {
        this.getIngredientes();
    }

}