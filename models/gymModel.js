const mongoose = require("mongoose");
const gymSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },      
    gender: {
        type: String,      
        require: true
    },
    locality: {
        type: String,
        require: true
    }
}, { timestamps: true });

const gymDetails = new mongoose.model("gymDetails", gymSchema);
module.exports = gymDetails;