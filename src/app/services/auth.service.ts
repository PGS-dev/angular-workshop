import {Injectable} from '@angular/core';


export const authUsers = [
    { username: 'admin', password: 'admin' }
];

@Injectable()
export class AuthService {
    private sessionUserKey = 'logged-user';

    doLogin(userData: AuthData) {
        const that = this;
        const findUser = authUsers.filter(
            user => user.username === userData.username &&
                    user.password === userData.password);

        if (findUser.length) {
            localStorage.setItem(that.sessionUserKey, JSON.stringify(findUser[0]));
            return findUser[0];
        }

        return;
    }

    doLogout() {
        const that = this;
        localStorage.removeItem(that.sessionUserKey);
    }

    isLoggedIn() {
        const that = this;
        return !!localStorage.getItem(that.sessionUserKey);
    }

    getLoggedUser() {
        const that = this;
        if (that.isLoggedIn()) {
            return JSON.parse(localStorage.getItem(that.sessionUserKey));
        }
        return;
    }

}

export class AuthData {
    constructor(public username: string,
                public password: string) {}
}
