import express, { Application, Request, Response } from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import { request } from 'https';
import nextHandler  from './handlers/nextHandler'
import errorHandler from './handlers/errorHandler'
import connectDB from './db/connectToDB';


const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(nextHandler)


app.use('/index', indexRouter);
app.use('/users', usersRouter);

app.use("*", (req:Request , res: Response )=> {
    console.log("request ===> ", request)
    res.status(200).json({data: "hello word "})
})


app.use(errorHandler)

export default app;
