let firstNum;
let secondNum;
let operator = "";
let result;

let firstNumTemp = "";
let secondNumTemp = "";



function numClick(value) {
    if (operator == "") {
        if (firstNumTemp == "") {
            if (value == "0") {
                return;
            }
        }
        if (firstNumTemp == "0"){
            firstNumTemp =  value;
            return;
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

        if (secondNumTemp == "") {
            if (value == "0") {
                secondNumTemp =  value;
                return;
            }
        } 
        if (secondNumTemp == "0"){
            secondNumTemp =  value;
            return;
        }
        if (secondNumTemp.includes(".")) {
            if (value == ".") {
                return;
            }
        }

        secondNumTemp = secondNumTemp + value;
        document.getElementById("secondNum").innerHTML = secondNumTemp;
        secondNum = parseFloat(secondNumTemp);

    }
}

function operatorClick(value) {

    if (firstNumTemp == ""){
        return;
    }
  
    if (operator != "") {
        answerClick();
        firstNumTemp = result ;
        document.getElementById("fistNum").innerHTML = firstNumTemp;

        document.getElementById("operator").innerHTML = value;

        secondNum = "";
        secondNumTemp = "";
        result = "";

        document.getElementById("secondNum").innerHTML = secondNum;
        document.getElementById("result").innerHTML = result;
        
    }

    document.getElementById("operator").innerHTML = value;
    operator = value;


}

function answerClick() {

    if (firstNumTemp == "" && secondNumTemp == "" && operator==""){
        return;
    }
    if (secondNumTemp == "" && operator==""){
        return;
    }
    if (secondNumTemp == ""){
        return;
    }
    

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
        if (secondNum == 0) {
            result = "Nothing can be divided by zero."
        }
        result = firstNum / secondNum;
    }
    else if (operator == "-") {
        result = firstNum + secondNum;
    }
    result = parseFloat(result.toFixed(7))
    // result = Math.round((result + Number.EPSILON) * 100) / 100

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