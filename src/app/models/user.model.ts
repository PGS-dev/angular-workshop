export class User {
    id: number;
    name: string;
    email: string;

    constructor(
        id: number,
        name: string,
        email: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    welcomeUser(name: string, email: string) {
        return `Welcome ${this.name} <${this.email}>`;
    }
}
