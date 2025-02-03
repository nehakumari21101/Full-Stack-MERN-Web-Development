const mongoose = require("mongoose");

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
const User = mongoose.model("User", userSchema); 
// Student collection name
// model represent collection and obj of model represent document

// const user1 = new User({
//   name: "Adam",
//   email: "adam@yahoo.in",
//   age: 33,
// })
// user1.save();


// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age: 50}
// ]).then((res)=>{
//   console.log(res);
// })
