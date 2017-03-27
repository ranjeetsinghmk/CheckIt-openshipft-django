export /**
 * User
 */
    class User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    constructor(parameters) {
        this.id = parameters.id;
        this.username = parameters.username;
        this.name = parameters.name;
        this.password = parameters.password;
        this.email = parameters.email;
        this.name = this.getName();
    }

    getName() {
        return this.name ? this.name : (this.email ? this.email.substring(0, this.email.indexOf('@')) : "");
    }

    toString() {
        return this.getName() + "(" + this.username + ")"
    }
}
export /**
 * Profile
 */
    class Profile {
    constructor(parameters) {

    }
}