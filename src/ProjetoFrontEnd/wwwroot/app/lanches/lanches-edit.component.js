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
var router_1 = require('@angular/router');
var lanche_1 = require('../shared/models/lanche');
var porcao_1 = require('../shared/models/porcao');
var lanches_service_1 = require('../shared/services/lanches.service');
var ingredientes_services_1 = require('../shared/services/ingredientes.services');
var LancheEditComponent = (function () {
    function LancheEditComponent(lancheService, ingredienteService, route) {
        this.lancheService = lancheService;
        this.ingredienteService = ingredienteService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    LancheEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.lancheService.getLanche(id)
                    .then(function (lanche) { return _this.lanche = lanche; });
            }
            else {
                _this.navigated = false;
                _this.lanche = new lanche_1.Lanche();
            }
        });
        this.ingredienteService
            .getIngredientes()
            .then(function (ingredientes) {
            return _this.ingredientes = ingredientes;
        })
            .catch(function (error) { return _this.error = error; });
    };
    LancheEditComponent.prototype.save = function () {
        var _this = this;
        this.lancheService
            .save(this.lanche)
            .then(function (lanche) {
            _this.lanche = lanche;
            _this.goBack(lanche);
        })
            .catch(function (error) { return _this.error = error; });
    };
    LancheEditComponent.prototype.goBack = function (savedLanche) {
        if (savedLanche === void 0) { savedLanche = null; }
        window.history.back();
    };
    LancheEditComponent.prototype.removeItem = function (id) {
        this.lanche.porcoes = this.lanche.porcoes.filter(function (item) { return item.id !== id; });
    };
    LancheEditComponent.prototype.addItem = function (qtde, ingrediente) {
        var porcaoNova = new porcao_1.Porcao();
        porcaoNova.quantidade = qtde;
        porcaoNova.ingredienteId = ingrediente.id;
        porcaoNova.ingrediente = ingrediente;
        this.lanche.porcoes.push(porcaoNova);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', lanche_1.Lanche)
    ], LancheEditComponent.prototype, "lanche", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LancheEditComponent.prototype, "close", void 0);
    LancheEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-lanche-edit',
            templateUrl: 'lanches-edit.component.html',
            styleUrls: ['lanches-edit.component.css']
        }), 
        __metadata('design:paramtypes', [lanches_service_1.LancheService, ingredientes_services_1.IngredienteService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], LancheEditComponent);
    return LancheEditComponent;
    var _a;
}());
exports.LancheEditComponent = LancheEditComponent;
//# sourceMappingURL=lanches-edit.component.js.map