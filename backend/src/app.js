import express from 'express';
import cors from 'cors';
import taskRoute from "./routes/task.route.js"
import userRoute from "./routes/user.route.js"
import categoryRoute from "./routes/category.route.js"
const app = express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    optionsSuccessStatus:200
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use("/tasks",taskRoute);
app.use("/users",userRoute);
app.use("/categories",categoryRoute);
export { app };