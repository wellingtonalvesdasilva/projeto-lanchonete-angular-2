"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var lanches_component_1 = require('./lanches/lanches.component');
var lanches_edit_component_1 = require('./lanches/lanches-edit.component');
var ingredientes_component_1 = require('./ingredientes/ingredientes.component');
var appRoutes = [
    {
        path: 'lanches',
        component: lanches_component_1.LanchesComponent
    },
    {
        path: 'lanches/edit/:id',
        component: lanches_edit_component_1.LancheEditComponent
    },
    {
        path: 'lanches/create',
        component: lanches_edit_component_1.LancheEditComponent
    },
    {
        path: 'ingredientes',
        component: ingredientes_component_1.IngredientesComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
