export class User {
    username: string;
    email: string;
    password: string;
    active: boolean;

    /*constructor(inputName: string, inputLastname: string, inputEmail: string, inputPassword: string, active: boolean) {
        this.username = inputName + inputLastname;
        this.email = inputEmail;
        this.password = inputPassword;
        this.active = active;
    }*/

    constructor(newUser) {
        this.username = `${newUser.name} ${newUser.lastName}`;
        this.email = newUser.email;
        this.password = newUser.password;
        this.active = true;
    }
}