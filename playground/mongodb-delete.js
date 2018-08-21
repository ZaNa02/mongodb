//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo db server');

  }
  console.log('connected to mongo db server');
  const db = client.db('TodoApp');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//delete Ania from users...
// db.collection('Users').deleteMany({name: 'Ania'}).then((result) => {
//   console.log(result);
// });


//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete from users by _ID!
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5b7aaba4593397e3da6a3784")
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  //client.close();
});
