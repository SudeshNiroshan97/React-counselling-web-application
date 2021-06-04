const fire = require('firebase');
const conf = require('../settings/db');

const db = fire.initializeApp(conf.firebaseConfig);

module.exports = db;

