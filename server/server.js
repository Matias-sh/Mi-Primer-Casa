require("dotenv").config({ path: "./config.env" });
const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// ROUTES
app.use(require("./src/routes/routes"));

app.listen(process.env.PORT);
console.log(`Server corriendo en el puerto ${process.env.PORT}`)

