const express = require("express");
const app = express();
require("./connection/connection")
const auth = require("./Routes/Auth");
const list =require("./Routes/list");

app.use("api/v1", auth);
app.use("api/v2", list);


app.listen(1000, () => {
    console.log("Server Started")
})