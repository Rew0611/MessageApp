const mongoose = require('mongoose');

const connectToDb = () => {
  mongoose
    .connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.npqh8yx.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`Database connected with ${data.connection.host}`)
    )
    .catch((err) => {
      console.log(`Error: ${err.message}`);
    });
};

module.exports = connectToDb;
