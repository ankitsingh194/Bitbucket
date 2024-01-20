const express = require('express');
const cros = require('cors');
const bodyparser = require('body-parser');
const Mongoesdbconnect = require('./mongodb/Mongodbcon');
const StudentModel = require('./mongodb/StudentModels');
const mongoose = require('mongoose')


const PORT = 3000 

const app = express()
app.use(cros())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))


Mongoesdbconnect()

app.get('/V1/student/Alldata',async(req, res)=>{
    const data = await StudentModel.find()
    res.status(200).json(data)

});

app.post('/V1/student/AddData',async(req,res) => {
    try{
    const data = req.body
     const document = {
        _id: new mongoose.Types.ObjectId(),
        name:data.name,
     }
    const newStudent = await StudentModel.create( document)
    res.status(200).send('User is Succesfully addded')
     console.log('User is Succesfully addded')
    } catch(err){
        console.log('User is not addded in database');
        res.status(400).send('User is not  addded')
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`)
})