const mongoose = require('mongoose');
require("dotenv").config();

const url = process.env.MONGODB_CONNECTION_STRING;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(url);
}

const userSchema = new mongoose.Schema({user: String})

const User = mongoose.model('user', userSchema);
module.exports = User;

const userOne = new User({
    user: 'stw'
})

userOne.save()