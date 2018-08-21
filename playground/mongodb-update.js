//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo db server');

  }
  console.log('connected to mongo db server');
  const db = client.db('TodoApp');

//findOneAndUpdate({filter, update, options, callback(promise)})


// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5b7bbbef491e67fa44663813")
// }, {
//   $set: {
//     completed: true //you're updating the db record phase from false to true :)
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

//increment age +1
//update name in users to Ania
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b7aaaa633c753e33e14a2ad')
}, {
  $set: {
    name: 'Amanda'
  },
  $inc: {
      age: 1
   }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});




  //client.close();
});
