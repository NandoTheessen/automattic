const server = require("./src/server");
const { connect } = require("./src/data/db");

const mongoHost = process.env.MONGODB_URI;

const PORT = 8000;
const HOST = "localhost";

console.log("Connecting to database & starting webserver.");
mongodb: connect("recipes", mongoHost)
  .then(async () => {
    console.log("Succesfully connected to mongoDB.");

    console.log(`Running on PORT ${PORT} on ${HOST}`);
    server.listen(PORT, HOST);
  })
  .catch(e => console.log("Could not connect to the database, shutting down."));
