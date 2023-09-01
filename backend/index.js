const express = require('express')
const server = express();
const  {connection} = require('./db')
const {InstructorRoute} = require("./routes/instructor.route")

server.use(express.json())

server.use('/instructor',InstructorRoute)

server.listen(8080,()=>{
    try {
        connection
        console.log("connected to database")
        console.log("server is running at port 8080")
    } catch (error) {
        console.log("facing some error during running server")
    }
})