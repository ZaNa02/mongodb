//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo db server');

  }
  console.log('connected to mongo db server');
  const db = client.db('TodoApp');

// db.collection('Todos').find({
//   _id: new ObjectID('5b7ab773ad56f28ed506f692')
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({
  name: 'Ania'
}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
});

  //client.close();
});
