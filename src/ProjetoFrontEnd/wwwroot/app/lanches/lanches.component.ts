import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lanche } from '../shared/models/lanche';
import { LancheService } from '../shared/services/lanches.service';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'my-lanche',
    templateUrl: 'lanches.component.html',
    styleUrls: ['lanches.component.css']
})

export class LanchesComponent implements OnInit {
    lanches: Lanche[];

    error: any;

    constructor(
        private router: Router,
        private lancheService: LancheService)
    { }

    getLanches(): void {
        this.lancheService
            .getLanches()
            .then(lanches =>
                this.lanches = lanches
            )
            .catch(error => this.error = error);
    }

    add(): void {
        this.router.navigate(['lanches/create']);
    }

    ngOnInit(): void {
        this.getLanches();
    }

    edit(lanche: Lanche): void {
        this.router.navigate(['lanches/edit', lanche.id]);
    }
}