const Patient = require('../models/Patient');
const fire = require('../services/DBServe');

const firestore = fire.firestore();

const addPatient = async (req, res, next) => {
    try {
        const data = await req.body;

        // Correction
        var temp = "";
        temp = data.password;
        data.password = data.email;
        data.email = temp;
        await firestore.collection('patient').doc().set(data);
        
        res.send("Record Entered!");
    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getPatients = async (req, res, next) => {
    try {
        const patients = await firestore.collection('patient');
        const data = await patients.get();
        const patientsarray = [];


        data.forEach(doc=>{
            const patient = new Patient(
                doc.data().username,
                doc.data().email,
                doc.data().password,
                doc.data().name,
                doc.data().age,
                doc.data().contact,
                doc.data().address
            );
            patientsarray.push(patient);
        });

        res.send(patientsarray);

    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getPatient = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('patient').where("username", "==", id);
        const data  = await student.get();

        console.log("ST 01");

        data.forEach(doc=>{
            console.log(doc.data());
            res.send(doc.data());
        });

        // res.send(data.data());


    } catch(error) {
        console.log("ST 04");
        res.status(400).send(error);
    }
}

const getPatientByUsername = async (req, res, next) => {
    try {
        const username = req.params.id;
        const patient = await firestore.collection('patient').where('username', '==', username);
        var data  = await patient.get();

        data.forEach(doc=>{
            res.send({password:doc.data().password, role:"Patient"});
        });
        
        const expert = await firestore.collection('expert').where('username', '==', username);
        data  = await expert.get();
        data.forEach(doc=>{
            res.send({password:doc.data().password, role:"Expert"});
        });

        const admin = await firestore.collection('admin').where('username', '==', username);
        data  = await admin.get();
        data.forEach(doc=>{
            res.send({password:doc.data().password, role:"Administrator"});
        });


    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const checkUsersByUsername = async (req, res, next) => {
    try {
        const username = req.params.id;
        var response = false;
        const patient = await firestore.collection('patient').where('username', '==', username);
        var data  = await patient.get();
        data.forEach(doc=>{
            response = true;

        });
        
        const expert = await firestore.collection('expert').where('username', '==', username);
        data  = await expert.get();
        data.forEach(doc=>{
            response = true;
        });

        res.send(response);


    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const updatePatient  = async (req, res, next) => {
    try {

        const id = req.params.id;
        const data = req.body;
        const patient = await firestore.collection('patient').where("username", "==", id).get();
        patient.forEach(async (doc)=>{
            await firestore.collection('patient').doc(doc.id).update(data);
        })
        res.send("Patient Updated!");

    } catch(error) {
        res.status(400).send(error);
    }
}

const deletePatient = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("DEL");
        const result = await firestore.collection('patient').where("username", "==", id).get();
        result.forEach(async (doc)=>{
            await firestore.collection('patient').doc(doc.id).delete();
            console.log("DEL SUC");
        })
        res.send("Patient Deleted!");

    } catch(error) {

    }
}

module.exports = {
    addPatient,
    getPatient,
    getPatients,
    getPatientByUsername,
    checkUsersByUsername,
    updatePatient,
    deletePatient
}
