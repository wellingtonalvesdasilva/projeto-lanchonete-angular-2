import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Lanche } from '../shared/models/lanche';
import { Porcao } from '../shared/models/porcao';
import { Ingrediente } from '../shared/models/ingrediente';
import { LancheService } from '../shared/services/lanches.service';
import { IngredienteService } from '../shared/services/ingredientes.services';

@Component({
    moduleId: module.id,
    selector: 'my-lanche-edit',
    templateUrl: 'lanches-edit.component.html',
    styleUrls: ['lanches-edit.component.css']
})
export class LancheEditComponent implements OnInit {
    ingredientes: Ingrediente[];

    @Input() lanche: Lanche;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;
    constructor(
        private lancheService: LancheService,
        private ingredienteService: IngredienteService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = + params['id'];
                this.navigated = true;
                this.lancheService.getLanche(id)
                    .then(lanche => this.lanche = lanche);
            } else {
                this.navigated = false;
                this.lanche = new Lanche();
            }
        });

        this.ingredienteService
            .getIngredientes()
            .then(ingredientes =>
                this.ingredientes = ingredientes
            )
            .catch(error => this.error = error);
    }

    save(): void {
        this.lancheService
            .save(this.lanche)
            .then(lanche => {
                this.lanche = lanche;
                this.goBack(lanche);
            })
            .catch(error => this.error = error);
    }

    goBack(savedLanche: Lanche = null): void {
        window.history.back();
    }

    removeItem(id) {
        this.lanche.porcoes = this.lanche.porcoes.filter(item => item.id !== id);
    }

    addItem(qtde, ingrediente : Ingrediente) {
        var porcaoNova = new Porcao();
        porcaoNova.quantidade = qtde;
        porcaoNova.ingredienteId = ingrediente.id;
        porcaoNova.ingrediente = ingrediente;
        this.lanche.porcoes.push(porcaoNova);
    }
}
