const express = require("express");
const app = express();
const PORT = process.env.PORT || 8383;
const routes = require("./routes");
const path = require('path');


//servers public as static folder 
app.use(express.static(path.join(__dirname, 'public')));

//allows express to use urlencoded and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//creates endpoints folder
app.use(routes);

//makes express listent on port
app.listen(PORT, () =>
    console.log(`The server listening on http://localhost:` + PORT)
    );


// Payment Gateway
require('dotenv').config();

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;


const stripe = require("stripe")(stripeSecretKey);


app.post("/purchase", function (req, res) {
    console.log(req.body.token);

    let token = req.body.token;

    stripe.charges.create({
        amount: 100,
        source: token,
        currency: "usd"
    }).then(() => {
        res.send("purchase successful");
    })
  });