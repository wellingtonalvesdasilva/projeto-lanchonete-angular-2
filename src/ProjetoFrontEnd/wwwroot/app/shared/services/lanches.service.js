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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var LancheService = (function () {
    function LancheService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:12856/api/lanche';
    }
    LancheService.prototype.getLanches = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LancheService.prototype.getLanchePorNome = function (term) {
        return this.http.get(this.apiUrl + '/pornome/' + term)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LancheService.prototype.getLanche = function (id) {
        return this.getLanches()
            .then(function (lanches) { return lanches.find(function (lanche) { return lanche.id === id; }); });
    };
    LancheService.prototype.save = function (lanche) {
        if (lanche.id)
            return this.put(lanche);
        return this.post(lanche);
    };
    LancheService.prototype.post = function (lanche) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(lanche), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LancheService.prototype.put = function (lanche) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.apiUrl + "/" + lanche.id;
        return this.http
            .put(url, JSON.stringify(lanche), { headers: headers })
            .toPromise()
            .then(function () { return lanche; })
            .catch(this.handleError);
    };
    LancheService.prototype.handleError = function (error) {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message.exceptionMessage || error);
    };
    LancheService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LancheService);
    return LancheService;
}());
exports.LancheService = LancheService;
