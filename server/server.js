//makew sure to setup your requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//makes use of this path to get to index.html
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));


const PORT = 5001;

//server running on PORT
app.listen(PORT, ()=>{
    console.log('server running on PORT:', PORT);
});

app.get('/calculate', (req, res)=>{
    console.log('/calculate GET');
    res.send('in GET');
});

app.post('/calculate', (req, res)=>{
    console.log('/calculate POST', req.body);

    let result = 0;
    if(req.body.operand === '+'){
        result = Number(req.body.num1) + Number(req.body.num2);
    }


    res.send({answerOut: result});
})