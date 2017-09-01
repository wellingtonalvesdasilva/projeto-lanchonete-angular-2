"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var menu_component_1 = require('./menu/menu.component');
var home_component_1 = require('./home/home.component');
var lanches_component_1 = require('./lanches/lanches.component');
var lanches_edit_component_1 = require('./lanches/lanches-edit.component');
var ingredientes_component_1 = require('./ingredientes/ingredientes.component');
var lanches_service_1 = require('./shared/services/lanches.service');
var ingredientes_services_1 = require('./shared/services/ingredientes.services');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                lanches_component_1.LanchesComponent,
                lanches_edit_component_1.LancheEditComponent,
                ingredientes_component_1.IngredientesComponent
            ],
            providers: [
                lanches_service_1.LancheService,
                ingredientes_services_1.IngredienteService
            ],
            bootstrap: [
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                lanches_component_1.LanchesComponent,
                lanches_edit_component_1.LancheEditComponent,
                ingredientes_component_1.IngredientesComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
