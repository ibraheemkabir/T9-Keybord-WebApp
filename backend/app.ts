import express from 'express';
import routes from './src/app-routes/routes';
import bodyParser from 'body-parser';
import { Request, Response,NextFunction,ErrorRequestHandler } from 'express';

const app = express();

const port = 5000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/home',( _ ,res) => {
    res.status(200).json({
        data: 'hello, Welcome to the word converter Api'
    })
});

app.use('/v1', routes)

app.listen(port, () => 
    console.log(`Running on Port ${port}`)
);