import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpService {

    constructor(private http: Http) {}

    private prepareUrl(url: string) {
        return environment.api + url;
    }

    private processRequest() {

    }

    get(url: string) {
        const that = this;
        return that.http.get(that.prepareUrl(url)).map(response => response.json());
    }

    post(url: string, data: any) {
        const that = this;
        return that.http.post(that.prepareUrl(url), data).map(response => response.json());
    }

    put(url: string, data: any) {

    }

    del(url: string) {

    }

}
