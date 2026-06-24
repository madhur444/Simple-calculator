let display = document.getElementById("display") as HTMLInputElement;
function appendValue(value:string):void{
    display.value += value
}
function clearDisplay():void{
    display.value=""
}
function calculate():void{
    try {
        display.value = eval(display.value).toString()
    } catch (error) {
        display.value="Error"
    }
}
function deleteLast():void{
display.value = display.value.slice(0,-1)
}
(window as any).appendValue = appendValue;
(window as any).clearDisplay=clearDisplay;
(window as any).calculate=calculate;
(window as any).deleteLast=deleteLast;