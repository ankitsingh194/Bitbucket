const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
      },
      name: {
        type: String,
        required: true
      },
      gravatar:{
        type:String,
        required:false,
        default:''
      },
      teachStack:{
        type:[String],
        required:false
      },

      location: {
        type: String,
        required: false,
        default:''
      },
      fieldOfInterest:{
        type:[String],
        required:false
      },
      seeking:{
        type:[String],
        required:false
      },
      bio: {
        type: String,
        required:false,
        default:''
      },
      githubURL:{
        type:String,
        required:false,
        default:''
      },
      twitterURL:{
        type:String,
        required:false,
        default:''
      },
      linkedinURL:{
        type:String,
        required:false,
        default:''
      }

})

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel;