function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    // alert("reverse");
    // console.log(Number(num.replace(/,/g, "")));
    return Number(num.replace(/,/g, ""));
}
// reverseNumberFormat("56,567");
var operator = document.getElementsByClassName("sign");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                //if input have a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = reverseNumberFormat(output);
                history = history + output;

                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("numb");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = reverseNumberFormat(getOutput());

        if (output != NaN) {
            output = output + this.id;
            console.log(output);
            printOutput(output);
        }
    });
}