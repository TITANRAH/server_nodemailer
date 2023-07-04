const express = require("express");
const rutas = require("./routes/nodemailer_routes");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./src/config/config.env" });
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", rutas);

const PORT = process.env.PORT || 4000;
console.log(PORT)
app.listen(PORT, console.log(`el servidor esta activo en el puerto ${PORT}`));