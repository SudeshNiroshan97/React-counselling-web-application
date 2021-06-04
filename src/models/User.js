
class User {
    constructor(username, password, email, state){
        this.username = username;
        this.password = password;
        this.email = email;
        this.state = state || 'disconnected';
    }
}

export default User;