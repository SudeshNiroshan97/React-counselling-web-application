import User from "./User";

class Expert extends User{
    constructor(username, email, password, name, profession, contact, address, rate, rank, category){
        super(username, email, password);
        this.name = name;
        this.profession = profession;
        this.contact = contact;
        this.address = address;
        this.category = category;
        this.rate = rate;
        this.rank = rank;
        
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
    setCategory(category){this.category= category}
}

export default Expert;