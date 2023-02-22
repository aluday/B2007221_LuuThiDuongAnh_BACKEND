const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contact = new Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    favorite: Boolean,
});

module.exports = mongoose.model('Contacts', contact);