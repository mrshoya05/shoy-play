import dotenv from 'dotenv'
import connectDB from './db/index.js'

//second way to  connect db

dotenv.config({
    path: './.env'
})

connectDB()





//first way to connect data base 

// import { express } from "express";
// const app = express()


// (async()=>{
//     try {
//       await mongoose.connect(`{process.env.MONGOBD_URI}/${DB_NAME}`) 
//       app.on("error", (error)=>{
//         console.log("ERROR", error);
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`App is listning on Port ${process.env.PORT}`);
//       })
//     } catch (error) {
//         console.error("Error:", error);
//         throw err
// }
// })()

//data base connectivity 