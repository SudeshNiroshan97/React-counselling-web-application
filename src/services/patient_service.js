import axios from 'axios';
import Session from 'react-session-api';
import EventEmitter from '../utils/EventEmitter';
import {handleErrors} from './error_handling';

// import Patient from '../models/Patient';


const path = "/users/patients";
var patient_list = [];

class PatientService {

    async getUserByUsername(username, password){
        await axios.get(`/users/byUsername/${username}`).then((response)=>{
            // console.log(response.data);
            if(password == response.data.password){
                console.log("LOGIN COMPLETED!");

                // Load Session
                Session.set("username", username);
                Session.set("role", response.data.role);

                EventEmitter.emit("loginCompleted", {logged: true});

                return true

            } else {
                console.log("LOGIN FAILED!");
                return false;
            }
        }).catch(handleErrors);

    }

    async checkExistingUsers(username){
        await axios.get(`/users/byExistUsers/${username}`).then((response)=>{
            // console.log(response.data);
            if(response.data){
                console.log("User Exists!");

                EventEmitter.emit("userexist", {exist: true});

            } else {
                console.log("User Not Existed");
            }
        }).catch(handleErrors);

    }

    async getPatients(){
        patient_list = [];
        await axios.get(path).then((response)=>{
            
            response.data.forEach(doc=>{
                patient_list.push(doc);
            });
            // console.log(patient_list);
            // return patient_list;
        }).catch(handleErrors);
        return patient_list;
    }

    async getPatient(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj =  response.data;
            // response.data.forEach(doc=>{
            //     return doc;
            // });
        }).catch(handleErrors);
        return obj;
    }

    async addPatient(Patient){

        await axios.post(path, Patient).then((response)=>{

        }).catch(handleErrors);
        console.log("User Entered!");
        alert("Registration Completed and Your details will further observed by Administrator.");
    }

    async updatePatient(id, patient){
        await axios.put(`${path}/${id}`, patient).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Patient Updated");
    }

    async deletePatient(id){
        await axios.delete(`${path}/${id}`).then((response)=>{

        }).catch(handleErrors);
        alert("Selected Patient Removed");
    }

    
}

export default new PatientService();