$(document).ready(readyNow);

let calculation = {
    num1: '',
    num2: '',
    operand: ''
} //end calculation

function readyNow() {
    $('.btn').on('click', captureBtn);
    $('.operandButton').on('click', operandCal);
    $('#equals').on('click', equalsCalc);
    $('#clear').on('click', clearCalc);

    updateHistory();
}

function captureBtn() {
    let numberIn = $(this).text();
    console.log('number clicked', numberIn);

    if (calculation.operand === '') {
        calculation.num1 += numberIn;
    } else {
        calculation.num2 += numberIn;
    }
    console.log(calculation);

}

function operandCal() {
    //need to find a way to get the operand.
    //use $(selector).text() to get content
    let operandIn = $(this).text();

    calculation.operand = operandIn;
    // calculation.num1 = $('#num1In').val();

    //find a way to get the second input assigned to the object.when enter pushed?
    //where do I send to server? after I have all the properties of the object
}

function clearCalc() {
    //clears out all the input and operand
    console.log('in clearCalc, cleared');
    // $('#num1In').val('');
    // $('#num2In').val('');
    calculation.num1 = '';
    calculation.num2 = '';
    // calculation.operand = 0;

}

function equalsCalc() {
    // calculation.num2 = $('#num2In').val();
    console.log('in equalsCalc', calculation);
    //all properties of object here. 
    //send to server here
    if (calculation.num2 == 0 || calculation.operand == '/') {
        alert('You MUST enter valid numbers');
        return;
    }
        $.ajax({
            method: 'POST',
            url: '/calculate',
            data: calculation
        }).then(function (response) {
            console.log('response back', response);

            $('#output').empty();
            $('#output').append(`OUTPUT: ${calculation.num1}
                             ${calculation.operand}
                             ${calculation.num2} = 
                             ${response.answerOut}`);
        });
    updateHistory();

}

function updateHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function (response) {
        console.log('response from GET', response);
        $('#history').empty();
        for (historyData of response) {
            $('#history').append(`<li>${historyData.num1} 
                                      ${historyData.operand} 
                                      ${historyData.num2} 
                                    = ${historyData.result}</li>`)
        }

    });
}