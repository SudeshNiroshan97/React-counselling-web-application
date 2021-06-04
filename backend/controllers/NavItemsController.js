const fire = require('../services/DBServe');
const firestore = fire.firestore();

const addNavItem = async (req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection('Navigation').doc().set(data);

        console.log("New Navigation Item entered!");
    } catch(error){
        console.log(error);
    }
    
}

const getNavItems = async (req, res, next) => {
    try{
        const nav_list = [];
        const records = await firestore.collection('Navigation').get();
        records.forEach((doc)=>{
            nav_list.push(doc.data());
        });
        res.send(nav_list);
    } catch(error){
        console.log(error);
    }
    
}

const getNavItem = async (req, res, next) => {
    try{
        const id = req.params.id;
        var result = null;
        const records = await firestore.collection('Navigation').where('item', "==", id).get();
        records.forEach((doc)=>{
            result = doc.data();
        });
        res.send(result);
    } catch(error){
        console.log(error);
    }
    
}

const updateNavItem = async (req, res, next) => {
    try{
        
        const id = req.params.id;
        var result = req.body;
        const records = await firestore.collection('Navigation').where('item', "==", id).get();
        records.forEach(async (doc)=>{
            await firestore.collection('Navigation').doc(doc.id).update({title:result.item, content:result.content});
        });
        res.send("Record Updated");
    } catch(error){
        console.log(error);
    }
    
}

const deleteNavItem = async (req, res, next) => {
    try{
        const id =  req.params.id;
        const rec = await firestore.collection('Navigation').where("item", "==", id).get();

        rec.forEach(async (doc)=>{
            await firestore.collection('Navigation').doc(doc.id).delete();
        })

        console.log("New Navigation Item deleted!");
    } catch(error){
        console.log(error);
    }
    
}

module.exports = {
    addNavItem,
    getNavItem, 
    getNavItems,
    updateNavItem,
    deleteNavItem
}