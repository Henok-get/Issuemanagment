import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import auth from './routes/auth.route.js'

const app = express()
const port = 3000
dotenv.config()

mongoose.connect(process.env.MONGODB).then(()=>{

  console.log('connected to db')
}).catch((err)=>{
  console.log(err)
})
app.use(express.json());


app.use('/auth',auth)


app.use(cookieParser());
 

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message =err.message||'internal server error'
    return res.status(statusCode).json({
        success:false,
      message,
        statusCode,

    })
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})