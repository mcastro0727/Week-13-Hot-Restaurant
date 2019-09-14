// Dependencies
// =============================================================
const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path');
// const router = express.Router();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })



// // Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname + '/tables.html'));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname + '/reserve.html'));
});

app.get("/api/tables", function (req, res) {
    res.json(reservation);
});

app.get("/api/waitlist", function (req, res) {
    res.json(waitList);
});

let reservation = [];
let waitList =[];

makeReservation = function(id,name,email, phone){
    reservation[reservation.length] = {
        "table": reservation.length + 1,
        "id": id,
        "name": name,
        "email": email,
        "phone": phone,
    }
};

console.log(reservation);


makeReservation("whjffherbghhe", "juan", "email","phone");
makeReservation("hfehrbhver", "melody","email","phone");

if(reservation.length < 5){
    app.post("/tables",function(req,res){
        let id =req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
    })
};

// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// module.exports = router