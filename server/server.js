//makew sure to setup your requires
// I need to set an array to keep track of history
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//makes use of this path to get to index.html
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

const historyOfCalc = [];
const PORT = 5001;

//server running on PORT
app.listen(PORT, () => {
    console.log('server running on PORT:', PORT);
});

app.get('/calculate', (req, res) => {
    console.log('/calculate GET');
    res.send(historyOfCalc);
});

app.post('/calculate', (req, res) => {
    console.log('/calculate POST', req.body);
    historyOfCalc.push(req.body);

    let result = 0;
    //finding out what the calculation is, and performing it
    if (req.body.operand === '+') {
        result = parseInt(req.body.num1) + parseInt(req.body.num2);
    } else if ((req.body).operand === '-') {
        result = parseInt(req.body.num1) - parseInt(req.body.num2);
    } else if (req.body.operand === '*') {
        result = parseInt(req.body.num1) * parseInt(req.body.num2);
    } else if ((req.body).operand === '/') {
        result = parseInt((req.body).num1) / parseInt((req.body).num2);
    }
    //answer sent out
    res.send({
        answerOut: result
    });
})