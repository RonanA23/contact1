const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = () => {
  try {
    mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected...happy days!!');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
