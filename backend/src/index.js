import {app} from './app.js';
import "dotenv/config"
import connectDB from './db/index.js';

const port = process.env.PORT || 2010

connectDB()
.then(() => {
app.listen(port, ()=>{
        console.log(` server is listening on port: ${port}`);
    });
})
.catch((err) => {
   console.log("MongoDB connection error:", err) 
});