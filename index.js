require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const routerCar = require("./routers/car.route");
const { response } = require("express");
const { error } = require("console");
const app = express();

const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//что бы мог передавать все строки

app.use(express.static("public"));

app.use((err, request, response, next) => {
  //middleware промежуточный обработчик
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

server.listen(port, () => {
  console.log("Server running on port http://localhost:${port}");
});

module.exports = app;
