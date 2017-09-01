import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Lanche } from '../../shared/models/lanche';
import { RequestOptions } from '@angular/http';

@Injectable()
export class LancheService {
    private apiUrl = 'http://localhost:12856/api/lanche';

    constructor(private http: Http) { }

    getLanches(): Promise<Lanche[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Lanche[])
            .catch(this.handleError);
    }

    getLanchePorNome(term: string): Promise<Lanche[]> {
        return this.http.get(this.apiUrl + '/pornome/' + term)
            .toPromise()
            .then(response => response.json() as Lanche[])
            .catch(this.handleError);
    }

    getLanche(id: number): Promise<Lanche> {
        return this.getLanches()
            .then(lanches => lanches.find(lanche => lanche.id === id));
    }

    save(lanche: Lanche): Promise<Lanche> {
        if (lanche.id)
            return this.put(lanche);
        return this.post(lanche);
    }

    private post(lanche: Lanche): Promise<Lanche> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(lanche), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(lanche: Lanche): Promise<Lanche> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${lanche.id}`;
        return this.http
            .put(url, JSON.stringify(lanche), { headers: headers })
            .toPromise()
            .then(() => lanche)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu o seguinte erro', error);
        return Promise.reject(error.message.exceptionMessage || error);
    }
}
