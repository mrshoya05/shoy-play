import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

//url data recieve  encrypt data 

app.use(express.urlencoded( { extended: true, limit: "16kb" } ));

//images fevicon storage 
app.use(express.static("public"))

//parse cookies 
app.use(cookieParser())


export { app }