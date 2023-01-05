const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();


const PORT = 443;

app.use(cors());
app.use(jsonParser());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "chatbot"
})

app.get('/', (req, res) => {
    res.send(
        "<body style='background-color:F0ECCF;'>"
        +
        "<h2 style='position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);color:A3BB98'>Server is running😀</h2>"
        +
        "</body>"
    );
});

app.get('/sumquestion', (req, res) => {
    db.query("SELECT COUNT(con_id) AS sum FROM conversation", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })

})

app.post('/id', jsonParser, (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM conversation WHERE con_id=?", [id], (err, result) => {
        if (err) {
            res.send("wrong!");
        } else {
            res.send(result);
        }
    })

})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})