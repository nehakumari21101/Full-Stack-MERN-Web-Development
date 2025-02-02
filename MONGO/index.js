const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
const User = mongoose.model("User", userSchema); // Student collection name

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
