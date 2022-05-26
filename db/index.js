const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ywr:ywr@cluster0.0yfeq.mongodb.net';
const mongoConnection = new MongoClient(url, {
  useUnifiedTopology: true,
});

mongoConnection
  .connect()
  .then(() => {
    console.log('database connected.');
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = mongoConnection;
