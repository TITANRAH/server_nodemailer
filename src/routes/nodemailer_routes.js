const express = require("express");
const ruta = express.Router();

const {setEmail} = require("../controllers/nodemailer_controller");

ruta.route("/api/mail").post(setEmail);

module.exports = ruta;