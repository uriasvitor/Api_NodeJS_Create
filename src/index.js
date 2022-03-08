const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const port = process.env.PORT || 3000;


app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
]

app.listen(port, ()=> console.log(`Listenning on port ${port}`));
