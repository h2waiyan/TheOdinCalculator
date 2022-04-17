let firstNum;
let secondNum;
let operator = "";
let result;

let firstNumTemp = "";
let secondNumTemp = "";


function numClick(value) {
    if (operator == ""){
        if (firstNumTemp == ""){
            if (value == "0"){
                return;
            }
        }
        firstNumTemp = firstNumTemp + value;
        document.getElementById("fistNum").innerHTML = firstNumTemp;   
    }

    if (operator != ""){
        firstNum =  parseFloat(firstNumTemp);
        if (secondNumTemp == ""){
            if (value == "0"){
                return;
            }
        }
        secondNumTemp = secondNumTemp + value;
        document.getElementById("secondNum").innerHTML = secondNumTemp;
    }
}

function operatorClick(value) {
    document.getElementById("operator").innerHTML = value;
    operator = value;
}

function answerClick() {
    secondNum =  parseFloat(secondNumTemp);

    if (operator == "+") {
        result = firstNum + secondNum;
    }
    else if (operator == "-") {
        result = firstNum - secondNum;
    }
    else if (operator == "x") {
        result =  firstNum * secondNum;
    }
    else if (operator == "/") {
        result = firstNum / secondNum;
    }
    else if (operator == "-") {
        result = firstNum + secondNum;
    }

    document.getElementById("result").innerHTML = " = "+ result;
}