import express from 'express';
import routes from './src/app-routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const port = 5000;

app.use(cors());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/',( _ ,res) => {
    res.status(200).json({
        message: 'hello, Welcome to the word converter Api'
    })
});

app.use('/v1', routes)

app.use((_,res)=>{
    res.status(404).json({
        status: "Failed",
        message: 'Route Not found, kindly refer to Api documentation'
    })
})

app.listen(port, () => 
    console.log(`Running on Port ${port}`)
);

export const server = app