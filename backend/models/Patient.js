const User = require("./User");

module.exports = class Patient extends User{
    constructor(username, email, password, name, age, contact, address){
        super(username, email, password, "disconnected");
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.address = address;
    }

    getName(){return this.name}
    getAge(){return this.age}
    getProfession(){return this.profession}
    getContact(){return this.contact}
    getAddress(){return this.address}

    setName(name){this.name = name}
    setAge(age){this.age = age}
    setProfession(profession){this.profession = profession}
    setContact(contact){this.contact = contact}
    setAddress(address){this.address = address}
}