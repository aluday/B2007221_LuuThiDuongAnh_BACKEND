const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;


app.get("/", (req, res)=>{
    res.json({message: "Welcome to connact book application"});
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})