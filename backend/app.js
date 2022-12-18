const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors())

// set port, listen for requests
const PORT = process.env.PORT || 4242;

// database
const db = require('./models');

app.get('/payments', (req, res) => {
    db.payments.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving Payment."
            });
        });
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});