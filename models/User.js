const mongoose = require('mongoose');

const User = mongoose.model("User", {
    username:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    token:[
        {
           accessType:{
               type: String,
               required: true
           },
           authToken:{
               type:String,
               required: true
           }
        }
    ]
});

module.exports ={
    User
}