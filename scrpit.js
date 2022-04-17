let firstNum;
let secondNum;
let operator = "";
let result;

let firstNumTemp = "0";
let secondNumTemp = "0";



function numClick(value) {
    if (operator == "") {
        if (firstNumTemp == "0") {
            if (value == "0") {
                return;
            }
            
        }
        if (firstNumTemp.includes(".")) {
            if (value == ".") {
                return;
            }
        }
        firstNumTemp = firstNumTemp + value;
        document.getElementById("fistNum").innerHTML = firstNumTemp;
    }

    if (operator != "") {
        firstNum = parseFloat(firstNumTemp);
        if (secondNumTemp == "0") {
            if (value == "0") {
                return;
            }

        }
        if (secondNumTemp.includes(".")) {
            if (value == ".") {
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
    secondNum = parseFloat(secondNumTemp);

    if (operator == "+") {
        result = firstNum + secondNum;
    }
    else if (operator == "-") {
        result = firstNum - secondNum;
    }
    else if (operator == "x") {
        result = firstNum * secondNum;
    }
    else if (operator == "/") {
        result = firstNum / secondNum;
    }
    else if (operator == "-") {
        result = firstNum + secondNum;
    }

    document.getElementById("result").innerHTML = " = " + result;
}

function clearClick() {
    firstNum = "";
    firstNumTemp = "";
    secondNum = "";
    secondNumTemp = "";
    operator = "";
    result = "";

    console.log(operator);

    document.getElementById("fistNum").innerHTML = "0";
    document.getElementById("operator").innerHTML = operator;
    document.getElementById("secondNum").innerHTML = secondNum;
    document.getElementById("result").innerHTML = result;

}