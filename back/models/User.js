const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

module.exports = model("User", userSchema);
