const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
