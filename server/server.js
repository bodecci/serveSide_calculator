//makew sure to setup your requires
// I need to set an array to keep track of history
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//makes use of this path to get to index.html
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));

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
    let calculation = req.body
    let result = 0;
    //finding out what the calculation is, and performing it
    if (calculation.operand === '+') {
        result = parseFloat(calculation.num1) + parseFloat(calculation.num2);
    } else if (calculation.operand === '-') {
        result = parseFloat(calculation.num1) - parseFloat(calculation.num2);
    } else if (calculation.operand === '*') {
        result = parseFloat(calculation.num1) * parseFloat(calculation.num2);
    } else if (calculation.operand === '/') {
        result = parseFloat(calculation.num1) / parseFloat(calculation.num2);
    }
    calculation.result = result;
    historyOfCalc.push(calculation);
    //answer sent out
    res.send({
        answerOut: result
    });
})