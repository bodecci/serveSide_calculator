$(document).ready(readyNow);

function readyNow(){
    $('.operandButton').on('click', operandCal);
    $('#clear').on('click', clearCalc);
    $('#equals').on('click', equalsCalc);
}

function operandCal(){
    console.log('in operandCalc');
    //need to find a way to get the operand.
}

function clearCalc(){
    console.log('in clearCalc');
    
}

function equalsCalc(){
    console.log('in equalsCalc');
    
}