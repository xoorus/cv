const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Education = new Schema({
    id: {
         type: Number
    },
    icon: {
         type: String
    },
    name: {
         type: String
    },
    score: {
         type: String
    },
    desc: {
         type: String
    },
    logo: {
         type: String
    },
    location: {
         type: String
    },
    date: {
         type: String
    },
    deliveredBy: {
         type: String
    }
}, {
   collection: 'educations'
})

module.exports = mongoose.model('Education', Education)