const mongoose = require('mongoose');
const {Schema, model} = mongoose; 
const {DB_URL, DB_NAME} = require('./config.json');

const productSchema = new Schema({
    name: String,
    price: String,
    onSale: Boolean
})

const Product = model('Product', productSchema);


mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {useNewUrlParser:true}, (err) => {
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});

module.exports = {"Product": Product};
