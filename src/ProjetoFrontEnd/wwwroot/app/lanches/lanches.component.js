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
var lanches_service_1 = require('../shared/services/lanches.service');
var LanchesComponent = (function () {
    function LanchesComponent(router, lancheService) {
        this.router = router;
        this.lancheService = lancheService;
    }
    LanchesComponent.prototype.getLanches = function () {
        var _this = this;
        this.lancheService
            .getLanches()
            .then(function (lanches) {
            return _this.lanches = lanches;
        })
            .catch(function (error) { return _this.error = error; });
    };
    LanchesComponent.prototype.add = function () {
        this.router.navigate(['lanches/create']);
    };
    LanchesComponent.prototype.ngOnInit = function () {
        this.getLanches();
    };
    LanchesComponent.prototype.edit = function (lanche) {
        this.router.navigate(['lanches/edit', lanche.id]);
    };
    LanchesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-lanche',
            templateUrl: 'lanches.component.html',
            styleUrls: ['lanches.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, lanches_service_1.LancheService])
    ], LanchesComponent);
    return LanchesComponent;
}());
exports.LanchesComponent = LanchesComponent;
