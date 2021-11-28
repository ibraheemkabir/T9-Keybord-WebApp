import express from 'express';

const app = express();
const port = 5000;

app.get('/',( _ ,res) => {
    console.log('hello')
});

app.listen(port, () => 
    console.log(`Running on Port ${port}`)
);