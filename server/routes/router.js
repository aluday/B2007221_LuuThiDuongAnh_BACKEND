const account = require('./account.route');
const contact = require('./contact.route');

function route(app){
    app.use('/api/contact', contact);
    app.use('/user', account);
}

module.exports = route;

