const Appointment = require('../models/Appointment');
const fire = require('../services/DBServe');

const firestore = fire.firestore();

const addAppointment = async (req, res, next) => {
    try {
        const data = await req.body;

        // Correction
        // var temp = "";
        // temp = data.password;
        // data.password = data.email;
        // data.email = temp;
        await firestore.collection('appointment').doc().set(data);
        
        res.send("Record Entered! ");
    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getAppointment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const appointment = await firestore.collection('appointment').doc(id).get();

        const appoint = new Appointment(
            appointment.data().user,
            appointment.data().expert,
            appointment.data().date,
            appointment.data().time,
            appointment.data().email,
            appointment.data().brief,
            appointment.data().state,
            appointment.id
        )

        console.log(appoint);

        res.send(appoint);

    } catch(error) {
        res.status(400).send(error);
    }
}

const getAppointments = async (req, res, next) => {
    try {
        const Appointments = await firestore.collection('appointment');
        const data = await Appointments.get();
        const appointmentsarray = [];


        data.forEach(doc=>{
            const appoint = new Appointment(
                doc.data().user,
                doc.data().expert,
                doc.data().date,
                doc.data().time,
                doc.data().email,
                doc.data().brief,
                doc.data().state,
                doc.id
            )
            appointmentsarray.push(appoint);
        });

        res.send(appointmentsarray);

    } catch(error) {
        res.status(400).send(error);
    }
}

const getAppointmentsByPatient = async (req, res, next) => {
    try {
        const user = req.params.id;
        const Appointments = await firestore.collection('appointment').where("user", "==", user);
        const data = await Appointments.get();
        const Appointmentsarray = [];
        data.forEach(doc=>{
            const appoint = new Appointment(
                doc.data().user,
                doc.data().expert,
                doc.data().date,
                doc.data().time,
                doc.data().email,
                doc.data().brief,
                doc.data().state,
                doc.id
            )
            Appointmentsarray.push(appoint);
        });

        res.send(Appointmentsarray);

    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getAppointmentsByExpert = async (req, res, next) => {
    try {
        const user = req.params.id;
        const Appointments = await firestore.collection('appointment').where("expert", "==", user);
        const data = await Appointments.get();
        const Appointmentsarray = [];
        data.forEach(doc=>{
            const appoint = new Appointment(
                doc.data().user,
                doc.data().expert,
                doc.data().date,
                doc.data().time,
                doc.data().email,
                doc.data().brief,
                doc.data().state,
                doc.id
            )
            Appointmentsarray.push(appoint);
        });

        res.send(Appointmentsarray);

    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getAppointmentsOrderByDate = async (req, res, next) => {
    try {
        const user = req.params.id;
        // const Appointments = await firestore.collection('appointment').where("user", "==", user).orderBy("date").orderBy("time").limit(3);
        const Appointments = await firestore.collection('appointment').where("user", "==", user);
        const data = await Appointments.get();
        const Appointmentsarray = [];
        data.forEach(doc=>{
            const appoint = new Appointment(
                doc.data().user,
                doc.data().expert,
                doc.data().date,
                doc.data().time,
                doc.data().email,
                doc.data().brief,
                doc.data().state,
                doc.id
            )
            Appointmentsarray.push(appoint);
        });

        res.send(Appointmentsarray);

    } catch(error) {
        res.status(400).send(error);
    }
    

}

const updateAppointment  = async (req, res, next) => {
    try {

        const id = req.params.id;
        const data = req.body;
        const expert = await firestore.collection('appointment').doc(id);
        await expert.update(data);
        res.send("Appointment Updated!");

    } catch(error) {
        res.status(400).send(error);
    }
}

const deleteAppointment = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('appointment').doc(id).delete();
        res.send("Appointment Deleted!");

    } catch(error) {

    }
}

module.exports = {
    addAppointment,
    getAppointment,
    getAppointments,
    getAppointmentsByPatient,
    getAppointmentsByExpert,
    getAppointmentsOrderByDate,
    updateAppointment,
    deleteAppointment
}