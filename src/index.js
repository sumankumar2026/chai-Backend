
import dotenv from "dotenv"
// import express from 'express'
import connectDB from "./db/index.js";
// const app = express()
dotenv.config({
    path:'./env'
})

connectDB()



/*
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERROR",error);
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is running at ${process.env.PORT }`)
        })
    }
    catch(error){
        console.error("Error:",error)
        throw err
    }

})()
    */