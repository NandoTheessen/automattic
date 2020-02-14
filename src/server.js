const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { getOne, getAll } = require("./controllers/get");
const { postOne } = require("./controllers/post");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

const healthz = (req, res) => {
  console.log(req);
  res.status(200).json({ msg: "knobhead" });
};

server.get("/", healthz);
server.get("/recipes", getAll);
server.get("/recipes/:id", getOne);
server.post("/recipes", postOne);

module.exports = server;
