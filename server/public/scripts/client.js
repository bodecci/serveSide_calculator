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
    //clears out all the input and operand
    console.log('in clearCalc, cleared');
    $('#num1In').val('');
    $('#num2In').val('');
    $('.operandButton').val('');
    calculation.num1 = 0;
    calculation.num2 = 0;
    calculation.operand = 0;
    
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
        
        $('#output').empty();
        $('#output').append(`OUTPUT: ${calculation.num1}
                             ${calculation.operand}
                             ${calculation.num2} = 
                             ${response.answerOut}`);
    });
    updateHistory();
    
}

function updateHistory(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function(response){
        console.log('response from GET', response);
        $('#history').empty();
        for(historyData of response){
            $('#history').append(`<li>${historyData.num1} 
                                      ${historyData.operand} 
                                      ${historyData.num2}</li>`)
        }
        
    });
}