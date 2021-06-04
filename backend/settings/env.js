const env = require('dotenv').config();

module.exports = class Env {
    // URL
    // #PORT = "";
    // #DB = "";
    // #DB_AUTH = "";
    // #DB_PASS = "";
    constructor(){
        this.URL = process.env.URL;
        this.HOST = process.env.HOST || 'localhost';
        this.PORT = process.env.PORT || 5000;
        this.DB = process.env.DB
    }
    
    getURL(){return this.URL}
    getPORT(){return this.PORT}
    getDB(){return this.DB}
}
