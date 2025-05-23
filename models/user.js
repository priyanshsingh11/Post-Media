const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniproject',);

const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    name: String,
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }],
})

module.exports = mongoose.model('user', usersSchema);