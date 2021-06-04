
function User (username, email, password, state){
    this.username = username || null;
    this.email = email;
    this.password = password || null;
    this.state = state;
}

User.prototype.getUsername = function(){
    return this.username;
}

User.prototype.setUsername = function(username){
    this.username = username;
}

User.prototype.getEmail = function(){
    this.email = email;
}

User.prototype.setEmail = function(email){
    this.email = email;
}

User.prototype.getPassword = function(){
    return this.password;
}

User.prototype.setPassword = function(password){
    this.password = password;
}

User.prototype.getState = function(){
    return this.state;
}

User.prototype.setState = function(state){
    this.state = state;
}

module.exports = User;