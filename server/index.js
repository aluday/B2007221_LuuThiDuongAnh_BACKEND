const express = require('express');
const cors = require('cors');
const contactRouter = require('./router/contact.route');
const ApiError = require('./helpers/api-error');
const db = require('./config/db_connect');
const morgan = require('morgan');

const app = express();
const port = 3000;

db.connect();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());


app.use('/api/contact', contactRouter);

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