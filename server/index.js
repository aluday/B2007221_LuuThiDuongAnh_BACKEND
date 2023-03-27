const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const bodyParser   = require('body-parser');
const bodyParser   = require('body-parser');



const route = require('./routes/router');
const ApiError = require('./api-error');
const db = require('./config');

const app = express();
const port = 3000;

db.connect();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


route(app);

app.use((req, res, next)=>{
    return next(new ApiError(404, "Resource not found"));
})

app.use((error, req, res, next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal server error"
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})