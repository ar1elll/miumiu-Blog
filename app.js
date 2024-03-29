const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const app = express()


app.use(express.static('public'))

app.listen(PORT,()=>{
    console.log(`server work on port: ${PORT} `)
})
// app.use(express.json())
// const start = async () =>{
//     try{
//         await mongoose.connect('mongodb+srv://plokohddy63:xRVrBeS8Or95XFS8@cluster0.hpizts7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//         app.listen(PORT, ()=>{
//             console.log(`Server work on port:` + PORT)
//         })
//     }catch(e){
//         console.log(e)
//     }
// }
// start()


