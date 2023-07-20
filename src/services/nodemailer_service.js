const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });


exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'tapiamecanico2023@gmail.com',
      pass: process.env.NODEMAILER_API_KEY
    }
  });


  


