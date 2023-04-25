const mongoose = require("mongoose")
require('dotenv').config({ path: '../Backend/config.env' });

const uri = process.env.MONGO_URI;
const connectDatabase =async  () => {

    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase

