function appendSymbol(symbol) {
    document.getElementById("result").value += symbol;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function calculate() {
    let result = document.getElementById("result").value;
    let calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
}

function deleteLast() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}
