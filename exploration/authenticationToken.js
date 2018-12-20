const {SHA256} = require('crypto-js');

const sentence = "Message to be hashed";
const hashed = SHA256(sentence + "uniqueSalt123").toString();


// Should evaluate to false because we added a salt to this
console.log(SHA256(sentence).toString() == hashed);