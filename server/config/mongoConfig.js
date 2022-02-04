const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/TSN-adminpage";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) console.log(err)
    else console.log("connected")
})

module.exports = mongoose
