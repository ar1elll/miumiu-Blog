const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT

const app = express()


app.use(express.static('public'))

// mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.hpizts7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// .then(() =>{console.log('conected to mangoDB')})

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.q4tpw18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// app.listen(PORT,()=>{
//     console.log(`server work on port: ${PORT} `)
// })


