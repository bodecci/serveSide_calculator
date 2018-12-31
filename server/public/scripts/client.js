$(document).ready(readyNow);

let calculation = {
    num1: 0,
    num2: 0,
    operand: 0
}

function readyNow(){
    $('.operandButton').on('click', operandCal);
    $('#clear').on('click', clearCalc);
    $('#equals').on('click', equalsCalc);
}

function operandCal(){
    //need to find a way to get the operand.
    //use $(selector).text() to get content
    let operandIn = $(this).text();

    calculation.operand = operandIn;
    calculation.num1 = $('#num1In').val();
    //find a way to get the second input assigned to the object.when enter pushed?
    //where do I send to server? after I have all the properties of the object
    
    console.log('in operandCalc', calculation);
}

function clearCalc(){
    console.log('in clearCalc');
    
}

function equalsCalc(){
    calculation.num2 = $('#num2In').val();
    console.log('in equalsCalc', calculation);
    //all properties of object here. 
    //send to server here
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: calculation
    }).then(function(response){
        console.log('response back', response);
        
    })
    
}