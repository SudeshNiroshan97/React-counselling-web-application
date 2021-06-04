
module.exports = class Appointment {
    constructor(user, expert, date, time, email, brief, state, id){
        this.user = user;
        this.expert = expert;
        this.date = date;
        this.time = time;
        this.email = email;
        this.brief  = brief;
        this.state = state;
        this.id = id;
    }

    getUser(){return this.user}
    getExpert(){return this.expert}
    getDate(){return this.date}
    getTime(){return this.time}
    getEmail(){return this.email}
    getBrief(){return this.brief}
    getState(){return this.state}

    setUser(user){this.user = user}
    setExpert(expert){this.expert = expert}
    setDate(date){this.date = date}
    setTime(time){this.time = time}
    setEmail(email){this.email = email}
    setBrief(brief){this.brief = brief}
    setState(state){this.state = state}
}