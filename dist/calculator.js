"use strict";
let display = document.getElementById("display");
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = "Error";
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
window.appendValue = appendValue;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
window.deleteLast = deleteLast;
