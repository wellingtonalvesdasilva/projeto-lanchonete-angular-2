import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanchesComponent } from './lanches/lanches.component';
import { LancheEditComponent } from './lanches/lanches-edit.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';

const appRoutes: Routes = [
    {
        path: 'lanches',
        component: LanchesComponent
    },
    {
        path: 'lanches/edit/:id',
        component: LancheEditComponent
    },
    {
        path: 'lanches/create',
        component: LancheEditComponent
    },
    {
        path: 'ingredientes',
        component: IngredientesComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

export const routing = RouterModule.forRoot(appRoutes);
