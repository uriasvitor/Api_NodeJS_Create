const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false}));

app.get('/',(req,res)=>{
    res.send('ok')
});

app.listen(3000)