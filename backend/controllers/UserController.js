const user = require('../models/User');
const { addPatient, getPatients, getPatient, getPatientByUsername, checkUsersByUsername, updatePatient, deletePatient } = require('./PatientController');
const { addExpert, getExpert, getExpertsByCategory, getExperts, getExpertAvailable, getRateExpert, rateExpert, updateExpert, updateExpertAvailable, deleteExpert } = require('./ExpertController');
const Patient = require('../models/Patient');
const fire = require('../services/DBServe');

const firestore = fire.firestore();

module.exports = (app) => {

    // PATIENTS
    app.route('/users/patients')
    .get(getPatients)
    .post(addPatient);

    app.route('/users/patients/:id').get(getPatient);

    app.route('/users/patients/:id').put(updatePatient);

    app.route('/users/patients/:id').delete(deletePatient);

    // EXPERTS
    app.route('/users/experts')
    .get(getExperts)
    .post(addExpert);

    

    app.route('/users/experts/:id').get(getExpert);

    app.route('/users/experts/:id/rate')
    .get(getRateExpert)
    .post(rateExpert);

    app.route('/users/experts/:id/available/:cat')
    .get(getExpertAvailable)
    .post(updateExpertAvailable);

    

    app.route('/users/experts/byCategory/:cat').get(getExpertsByCategory);


    app.route('/users/experts/:id').put(updateExpert);

    app.route('/users/experts/:id').delete(deleteExpert);

    // ADMIN

    app.route('/users/admin/:id').get(async (req, res, next)=>{
        try {
            const id = req.params.id;
            const admin = await firestore.collection('admin').where("username", "==", id);
            const data  = await admin.get();
    
            console.log("AD 01");
    
            data.forEach(doc=>{
                console.log(doc.data());
                res.send(doc.data());
            });
    
            // res.send(data.data());
    
    
        } catch(error) {
            console.log("ST 04");
            res.status(400).send(error);
        }
    })


    app.route('/users/byUsername/:id').get(getPatientByUsername);

    app.route('/users/byExistUsers/:id').get(checkUsersByUsername);

    app.route('/users/:id').get(getPatientByUsername);

    // app.get('/users', (req, res, next)=>{
    //     console.log("Users Here now");
    // })


}