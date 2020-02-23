const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { getOne, getAll } = require("./controllers/get");
const { postOne, deleteOne } = require("./controllers/post");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(cors());

const healthz = (req, res) => {
  console.log(req);
  res.status(200).json({ msg: "knobhead" });
};

server.get("/", healthz);
server.get("/recipes", getAll);
server.get("/recipes/:id", getOne);
server.post("/recipes", postOne);
server.delete("/recipes", deleteOne);

module.exports = server;
