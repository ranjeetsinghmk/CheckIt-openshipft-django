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
    }
}
export /**
 * Profile
 */
class Profile {
    constructor(parameters) {
        
    }
}