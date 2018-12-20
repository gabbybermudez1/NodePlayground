const {SHA256} = require('crypto-js');

const generateAuthToken = (username) => {
    return SHA256(username + "ignatiusPBody").toString();
}

module.exports = {
    generateAuthToken
}