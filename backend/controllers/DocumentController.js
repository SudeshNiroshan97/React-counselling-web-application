const {addAppointment, getAppointments, getAppointment, getAppointmentsByPatient, getAppointmentsByExpert, getAppointmentsOrderByDate, updateAppointment, deleteAppointment} = require('./AppointmentController');
const { addNavItem, getNavItem, getNavItems, updateNavItem, deleteNavItem} = require('./NavItemsController');
const fire = require('../services/DBServe');

const firestore = fire.firestore();

module.exports = (app) => {

    app.route('/appointments').post(addAppointment);

    app.route('/appointments/:id').get(getAppointment);

    app.route('/appointments/byPatient/:id')
    .get(getAppointmentsByPatient)
    .delete(deleteAppointment);

    app.route('/appointments/byExpert/:id')
    .get(getAppointmentsByExpert)
    .delete(deleteAppointment);

    app.route('/appointments/dateOrder/:id')
    .get(getAppointmentsOrderByDate)

    // Nav Items
    app.route('/navitems')
    .get(getNavItems)
    .post(addNavItem);

    app.route('/navitems/:id')
    .get(getNavItem)
    .put(updateNavItem)
    .delete(deleteNavItem);
}