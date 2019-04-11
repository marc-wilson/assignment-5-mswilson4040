const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbuser:Vphwjx77f2GgNiba@cluster0-cawm7.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    title: String
});

module.exports = mongoose.model('User', userSchema);
