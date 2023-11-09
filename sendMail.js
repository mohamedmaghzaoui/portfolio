//create server using express
const express = require("express");
//use nodemailer for sending mails
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser"); // Add body-parser
const cors = require("cors"); //used to connect between frontend and backend for localhost

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser to parse form data
// Nodemailer setup for sending emails

const sendMail = (content) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "mohamedmaghzaoui53@gmail.com",
      pass: process.env.PASSWORD, // Retrieving password from environment variables
    },
  });

  const mailOptions = {
    from: "mohamedmaghzaoui53@gmail.com",
    to: "mohamedmaghzaoui53@gmail.com",
    subject: "Notification de portfolio",
    html: `Name=${content.name} and message=${content.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
//post request
app.post("/send-mail", (req, res) => {
  const { name, message } = req.body; // Retrieve data from the form

  const content = {
    name,
    message,
  };

  sendMail(content); // Send the email

  // Respond to the client
  res.send("Email sent successfully");
});
//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
