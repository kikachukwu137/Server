import express from 'express';
import userRoute from './routes/user.routes.js';


const app = express()

//bodyparser
app.use(express.json())


app.use("/users",userRoute)

app.all("*",(req,res)=>{
    res.status(404)
    .json({message: "file not found"})
})


export default app;