import axios from 'axios';

const path = '/users';

class UserService {

    constructor(){console.log("User Service Initiate")}

    getUsers(){
        axios.get(path);
    }

    async getAdmin(id){
        var obj = null;
        await axios.get(`${path}/admin/${id}`).then((response)=>{
            
            obj =  response.data;
        });
        return obj;
    }

    

    
}

export default new UserService();