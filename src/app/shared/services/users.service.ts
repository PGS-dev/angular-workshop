import { users } from './users';
import { User } from './user';

export class UsersService {

    users: User[] = users;

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number) {
        let user = this.users.find(user => user.id == id)
        console.log(user, id, typeof id)
        return user;
    }
}