const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('/calculate GET');
    res.send(historyOfCalc);
});

router.post('/', (req, res) => {
    console.log('/calculate POST', req.body);
    let calculation = req.body
    let result = 0;
    //finding out what the calculation is, and performing it
    if (calculation.operand === '+') {
        result = Number(calculation.num1) + Number(calculation.num2);
    } else if (calculation.operand === '-') {
        result = Number(calculation.num1) - Number(calculation.num2);
    } else if (calculation.operand === '*') {
        result = Number(calculation.num1) * Number(calculation.num2);
    } else if (calculation.operand === '/') {
        result = Number(calculation.num1) / Number(calculation.num2);
    }
    calculation.result = result;
    historyOfCalc.push(calculation);
    //answer sent out
    res.send({
        answerOut: result
    });
});

module.exports = router;