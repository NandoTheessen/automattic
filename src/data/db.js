const mongoose = require("mongoose");

module.exports = {
  connect: (database = "sandbox", host = "localohst") => {
    return mongoose.connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
};
