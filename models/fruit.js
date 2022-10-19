const mongoose = require('mongoose');


// Make a Schema
const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});


//Make a Model From The Schema
const Fruit = mongoose.model('Fruit', fruitSchema);



//Export The Model For Use In The App
module.exports = Fruit;