import axios from 'axios';
// import Patient from '../models/Patient';


const path = "/appointments";
var appoint_list = [];

class AppointmentService {

    async getAppointByPatient(username){
        appoint_list = [];
        await axios.get(`${path}/byPatient/${username}`).then((response)=>{
            response.data.forEach(doc => {
                appoint_list.push(doc);
            })
        });
        return appoint_list;

    }

    async getAppointByExpert(username){
        appoint_list = [];
        await axios.get(`${path}/byExpert/${username}`).then((response)=>{
            response.data.forEach(doc => {
                appoint_list.push(doc);
            })
        });
        return appoint_list;

    }

    async getAppointOrderByDate(username){
        appoint_list = [];
        await axios.get(`${path}/dateOrder/${username}`).then((response)=>{
            response.data.forEach(doc => {
                appoint_list.push(doc);
            })
        });
        // console.log(appoint_list);
        return appoint_list;

    }

    async getAppoinments(){
        appoint_list = [];
        await axios.get(path).then((response)=>{
            
            response.data.forEach(doc=>{
                appoint_list.push(doc);
            });
            // console.log(patient_list);
        });
        return appoint_list;
    }

    async getAppoinment(id){
        var obj = null;
        await axios.get(`${path}/${id}`).then((response)=>{
            
            obj = response.data;
            // console.log(patient_list);
        });
        console.log(obj);
        return obj;
    }

    async addAppointment(Appointment){

        await axios.post(path, Appointment).then((response)=>{

        })
        console.log("Appointment Created!");
    }


    async deleteAppointment(id){
        await axios.delete(path+'/'+id).then((response)=>{

        })
        console.log("Appointment removed!");
    }

    
}

export default new AppointmentService();