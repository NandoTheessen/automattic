const mongoose = require("mongoose");

module.exports = {
  connect: (
    database = "sandbox",
    host = "localohst",
    user = "test",
    password = "test"
  ) => {
    return mongoose.connect(
      `mongodb://${user}:${password}@${host}/${database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
  }
};
