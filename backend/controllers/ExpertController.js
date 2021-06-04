const Expert = require('../models/Expert');
const fire = require('../services/DBServe');

const firestore = fire.firestore();

const addExpert = async (req, res, next) => {
    console.log("ST 01");
    try {
        const data = await req.body;

        // Correction
        var temp = "";
        temp = data.password;
        data.password = data.email;
        data.email = temp;
        await firestore.collection('expert').doc().set(data);
        
        res.send("Record Entered! ");
    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getExperts = async (req, res, next) => {
    try {
        const Experts = await firestore.collection('expert');
        const data = await Experts.get();
        const Expertsarray = [];


        data.forEach(doc=>{
            const expert = new Expert(
                doc.data().username,
                doc.data().eamil,
                doc.data().password,
                doc.data().name,
                doc.data().profession,
                doc.data().contact,
                doc.data().address,
                doc.data().rate,
                doc.data().rank,
                doc.data().category || "Any"
            )
            Expertsarray.push(expert);
        });

        res.send(Expertsarray);

    } catch(error) {
        res.status(400).send(error);
    }
    

}

const getExpertsByCategory = async (req, res, next) => {
    
    try {
        const cat = req.params.cat;
        const Experts = await firestore.collection('expert').where('category', '==', cat);
        const data = await Experts.get();
        const Expertsarray = [];


        data.forEach(doc=>{
            const expert = new Expert(
                doc.data().username,
                doc.data().eamil,
                doc.data().password,
                doc.data().name,
                doc.data().profession,
                doc.data().contact,
                doc.data().address,
                doc.data().rate,
                doc.data().rank,
                doc.data().category || "Any"
            )
            Expertsarray.push(expert);
        });

        res.send(Expertsarray);

    } catch(error) {
        res.status(400).send(error);
    }
}

const getExpert = async (req, res, next) => {
    try {
        const id = req.params.id;
        const expert = await firestore.collection('expert').where("username", "==", id);
        const data  = await expert.get();

        data.forEach(doc=>{
            res.send(doc.data());
        });

    } catch(error) {
        console.log("ST 04");
        res.status(400).send(error);
    }
}

const getExpertAvailable  = async (req, res, next) => {
    console.log("ST 00");
    try {
        // console.log("ST 01");
        const id = req.params.id;
        const cat = req.params.cat;
        // const data = req.body;
        // console.log("ST 02");

        const expert =  await firestore.collection('expert').where("username", "==", id);
        const record = await expert.get();
        record.forEach(async (doc) => {
            console.log("ST 04 " + record);
            var rec = await firestore.collection('expert').doc(doc.id).collection('available').doc(cat);
            const data = await rec.get();
            res.send(data.data());
            // data.forEach(doc=> {
            //     console.log(doc.data());
            //     res.send(doc.data());
            // })
        });

        console.log("ST 05 " + record);
        
        // res.send("Expert Found!");

    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const getRateExpert = async (req, res, next) => {
    try {
        const id = req.params.id;
        const expert = await firestore.collection('expert').where("username", "==", id);
        const rec = await expert.get();
        rec.forEach(async (doc)=>{
            var impo = await firestore.collection('expert').doc(doc.id).get();
            var rate = await impo.data().rate;
            res.send(rate);
        });

    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const rateExpert  = async (req, res, next) => {
    try {
        const id = req.params.id;
        var data = req.body;
        const expert = await firestore.collection('expert').where("username", "==", id);
        const rec = await expert.get();
        rec.forEach(async (doc)=>{
            var impo = await firestore.collection('expert').doc(doc.id).get();
            var rankers = await impo.data().rate.raters || 0;
            var score = await impo.data().rate.score || 0;
            ++rankers;
            var rate = data.rate + score;
            await firestore.collection('expert').doc(doc.id).update({rate:{score:rate, raters: rankers}});
        })
        res.send("Expert Updated!");

    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const updateExpert  = async (req, res, next) => {
    try {
        console.log("ST01")
        const id = req.params.id;
        const data = req.body;
        const expert = await firestore.collection('expert').where("username", "==", id).get();
        expert.forEach(async (doc)=>{
            await firestore.collection('expert').doc(doc.id).update(data);
        })
        res.send("Expert Updated!");

    } catch(error) {
        res.status(400).send(error);
    }
}

const updateExpertAvailable  = async (req, res, next) => {
    console.log("ST 01");
    try {
        console.log("ST 01");
        const id = req.params.id;
        const cat = req.params.cat;
        const data = req.body;
        console.log("ST 02");

        const expert =  await firestore.collection('expert').where("username", "==", id);
        const record = await expert.get();
        record.forEach(async (doc) => {
            console.log("ST 04 " + record);
            var rec = await firestore.collection('expert').doc(doc.id).collection('available').doc(cat);
            await rec.set(data, { merge: true });
        });

        console.log("ST 05 " + record);
        
        res.send("Expert Updated!");

    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const deleteExpert = async (req, res, next) => {
    try {
        console.log("DEL ST");
        const id = req.params.id;
        const result = await firestore.collection('expert').where("username", "==", id).get();
        result.forEach(async (doc)=>{
            await firestore.collection('expert').doc(doc.id).delete();
            console.log("DEL SUC");
        })
        res.send("Expert Deleted!");

    } catch(error) {

    }
}

module.exports = {
    addExpert,
    getExpert,
    getExperts,
    getExpertAvailable,
    getExpertsByCategory,
    getRateExpert,
    rateExpert,
    updateExpert,
    updateExpertAvailable,
    deleteExpert
}
