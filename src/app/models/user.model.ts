export class User {
    username: string;
    email: string;
    password: string;
    active: boolean;

    constructor(newUser) {
        this.username = `${newUser.name} ${newUser.lastName}`;
        this.email = newUser.email;
        this.password = newUser.password;
        this.active = true;
    }
}