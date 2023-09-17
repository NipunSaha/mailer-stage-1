const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'nipunssaha2011@gmail.com',
        pass : 'qecnbbdcxybxtqof'
    },
    secure : true
})