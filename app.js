const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const contactsRouter = require("./app/routes/contact.route");

const app =  express();

app.use(cors());

app.use("/api/contacts", contactsRouter);


app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message || "Internal server error",
    });
});

module.exports = app;