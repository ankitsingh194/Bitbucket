const mongoose = require('mongoose')


const Mongoesdbconnect = async() => {
    try{
   await mongoose.connect('mongodb+srv://ankit1602121007:PBQXpGxJtjymhYgw@cluster0.djjfma7.mongodb.net/`')
  .then(() => console.log('Connected!'));
    } catch(err){
        console.log('error not able to connect to  database',err)
    }
}


module.exports = Mongoesdbconnect