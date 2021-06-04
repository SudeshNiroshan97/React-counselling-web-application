const User = require("./User");

module.exports = class Expert extends User{
    constructor(username, email, password, name, profession, contact, address, rate, rank, category){
        super(username, email, password, "disconnected");
        this.name = name;
        this.profession = profession;
        this.contact = contact;
        this.address = address;
        this.rate = rate;
        this.rank = rank;
        this.category = category;
    }

    getName(){return this.name}
    getProfession(){return this.profession}
    getContact(){return this.contact}
    getAddress(){return this.address}
    getRate(){return this.rate}
    getRank(){return this.rank}
    getCategory(){return this.category}

    setName(name){this.name = name}
    setProfession(profession){this.profession = profession}
    setContact(contact){this.contact = contact}
    setAddress(address){this.address = address}
    setRate(rate){this.rate = rate}
    setRank(rank){this.rank = rank}
    setCategory(category){this.category = category}
}