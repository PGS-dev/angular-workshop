import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private httpService: HttpService) {
    }

    getList(keyword?: string) {
        const that = this;
        return that.httpService.get(!keyword ? 'users' : 'posts');
    }

    getDetails(idUser) {
        const that = this;
        return that.httpService.get(`users/${idUser}`);
    }

}

export interface UserDetailsInterface {
    id: number;
    name: string;
}
