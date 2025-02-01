import app from "./app.js";
import { connect } from '../src/config/db.js';
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT
const MONGO_URL =process.env.MONGO_URL
if(!MONGO_URL){
    console.error("MongoDB connection URL is isssing in .env file")
    process.exit(1); // stop the server if no DB url
}
connect(MONGO_URL)
    .then(()=>{

    console.log('server is connected')

app.listen (PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

})

.catch((error)=>{
    console.error("database connection failed ", error.message);
    process.exit(1) // stop server on DB failure

})




