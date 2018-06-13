const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
   name : String,
   price: String,
   imgUrl: String,
   barcodeUrl : String
});


module.exports = mongoose.model('Item', ItemSchema);