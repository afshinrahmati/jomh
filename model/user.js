const mongoose = require('mongoose')
const Schem = mongoose.Schema;



const NEW_user = new Schem({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }

});


module.exports = user = mongoose.model('user', NEW_user)