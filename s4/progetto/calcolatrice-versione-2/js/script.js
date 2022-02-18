window.alert("cerca la calcolatrice e inizia ad usarla!")
function clearScreen() {
    document.getElementById("result").value = "";
}

// valori display
function display(value) {
    document.getElementById("result").value += value;
}
// risultato
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}