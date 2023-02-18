const express = require('express');
const cors = require('cors');
const contactRouter = require('./router/contact.route');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());


app.use('/api/contact', contactRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})