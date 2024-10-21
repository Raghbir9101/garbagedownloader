const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.static("./"));
app.use(cors())


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3001,()=> console.log("Server started on port 3001"))