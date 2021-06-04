const express = require('express');
const router = express.Router();


const ENV = require('./settings/env');

// router.get('/', (req, res)=>{
//     res.send("Sever Up");
// })

module.exports = (app) => {

    // USER CONTROLLER
    require('./controllers/UserController')(app);


    // APPOINTMENT CONTROLLER
    var c = require('./controllers/DocumentController')(app);


    const env = new ENV();
    app.get('/', (req, res, next)=>{
        console.log(req.body);
    })

    app.get('*', (req, res, next)=>{
        res.status(404);
        res.send({error:"Page not Found"});
    })

    // ERROR HANDLING
    app.use(function(req, res, next) {
        res.status(404);
      
        // respond with html page
        if (req.accepts('html')) {
          res.render('404', { url: req.url });
          return;
        }
      
        // respond with json
        if (req.accepts('json')) {
          res.json({ error: 'Not found' });
          return;
        }
      
        // default to plain-text. send()
        res.type('txt').send('Page Not found');
      });

    
}