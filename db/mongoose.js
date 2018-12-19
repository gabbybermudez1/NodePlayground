const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:271017/userDB');

module.exports = {
    mongoose
};