// import Mongoose library is ODM (Object data modeling) libray help interact with MongoDB
const mongoose = require('mongoose');

/*
    - defining schema
    new mongoose.Schema() is used to define the schema for the User model.
    A schema defines the structure and rules for the data that will be
    stored in the collection.
*/

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  statue: { type: Boolean, default: true }
});


/* - create  User model and return or export it 
    mongoose.model() creates a model from the schema. The first argument ('User') is the name of the model,
    and the second argument (userSchema) is the schema we defined earlier.
 */
module.exports = mongoose.model('User', userSchema);

/*
  - Schema is defines the structure of the documents within a MongoDB collection, 
  including field names and their types, validation rules, default values, etc.

  -  A model is a class based on the schema. It provides an interface for
  interacting with the MongoDB database and performing operations like creating,
  reading, updating, and deleting documents.

  -Mongoose: This is the library that helps interact with MongoDB. 
  It allows us to define schemas and models, as well as perform database
  operations like queries, updates, and deletions.

*/