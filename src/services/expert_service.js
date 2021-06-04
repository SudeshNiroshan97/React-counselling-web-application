import axios from 'axios';
import Session from 'react-session-api';
import {handleErrors} from './error_handling';
// import Expert from '../models/Expert';


const path = "/users/experts";
var expert_list = [];

class ExpertService {

    

    async getUserByUsername(username, password){
        await axios.get(`/users/byUsername/${username}`).then((response)=>{
            // console.log(response.data);
            if(password == response.data){
                console.log("LOGIN COMPLETED!");

                // Load Session
                Session.set("username", username);
                Session.set("Role", "Expert");
                return true

            } else {
                console.log("LOGIN FAILED!");
                return false;
            }
        });

    }

    async getExperts(){
        expert_list = [];
        await axios.get(path).then((response)=>{
            expert_list = [];
            response.data.forEach(doc=>{
                expert_list.push(doc);
            });
        });
        return expert_list;
    }

    async getExpert(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            obj = response.data;
        });
        return obj;
    }

    async getExpertsByCategory(category){
        expert_list = [];
        await axios.get(`${path}/byCategory/${category}`).then((response)=>{
            
            response.data.forEach(doc=>{
                expert_list.push(doc);
            });
        });
        return expert_list;
    }

    async addExpert(Expert){
        console.log("User Ging to Enter!");
        await axios.post(path, Expert).then((response)=>{

        })
        console.log("User Entered!");
        alert("Registration Completed and Your details will further observed by Administrator.")
    }

    async addAvailableTime(id, cat, time){
        await axios.post(`${path}/${id}/available/${cat}`, {time:time}).then((response)=>{
            console.log("Time Updated!");
            alert("Time Updated");
        })
    }

    async getAvailableTime(id, cat){
        var time; 
        await axios.get(`${path}/${id}/available/${cat}`).then((response)=>{
            time = response.data.time;
        })
        return time;
    }

    async getRateExpert(id){
        var rate = null;
        await axios.get(`${path}/${id}/rate`).then((response)=>{
            rate = response.data;
        })
        return rate;
    }

    async rateExpert(id, rating){
        console.log("Rating - " + rating);
        await axios.post(`${path}/${id}/rate`, {rate: rating}).then((response)=>{
            alert("Your Rating Added!");
        })
    }

    async updateExpert(id, expert){
        await axios.put(`${path}/${id}`, expert).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Expert Updated");
    }

    async deleteExpert(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Expert Removed");
    }
    
}



export default new ExpertService();