const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/contactbook";

mongoose.set('strictQuery', true);
async function connect() {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
           
        });
        console.log("Connected to the database");  
    }
    catch(error){
        console.log("Cannot connect to the database");
    }
}

module.exports = {connect};