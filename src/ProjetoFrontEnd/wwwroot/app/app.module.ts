import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LanchesComponent } from './lanches/lanches.component';
import { LancheEditComponent } from './lanches/lanches-edit.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

import { LancheService } from './shared/services/lanches.service';
import { IngredienteService } from './shared/services/ingredientes.services';

import { routing } from './app.routing';

@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations:
    [
        MenuComponent,
        HomeComponent,
        LanchesComponent,
        LancheEditComponent,
        IngredientesComponent
    ],
    providers:
    [
        LancheService,
        IngredienteService
    ],
    bootstrap: [
        MenuComponent,
        HomeComponent,
        LanchesComponent,
        LancheEditComponent,
        IngredientesComponent
    ]
})
export class AppModule {
}
