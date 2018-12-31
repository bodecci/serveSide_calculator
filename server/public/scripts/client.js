$(document).ready(readyNow);

function readyNow(){
    $('.operandButton').on('click', operandCal);
    $('#clear').on('click', clearCalc);
    $('#equals').on('click', equalsCalc);
}

function operandCal(){
    //need to find a way to get the operand.
    //use $(selector).text() to get content
    let operandIn = (this);
    console.log('in operandCalc', operandIn);
}

function clearCalc(){
    console.log('in clearCalc');
    
}

function equalsCalc(){
    console.log('in equalsCalc');
    
}