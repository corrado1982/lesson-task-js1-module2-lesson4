const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const inputs = document.querySelector(".inputs");


let intervalId;
let number;

function hold() {
    number = 0;
button.textContent = "Release to stop counting!";


intervalId = setInterval (function() {
    
    number++;
    counter.innerHTML = number;
    inputs.innerHTML = "";
    
}, 1000);

}

function release() {
    clearInterval(intervalId);
    button.textContent = "Press and hold to count";
    for (let i = 1; i <= number; i++) {

        inputs.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;   
    }

}






////////


button.addEventListener("mousedown", hold);
button.addEventListener("mouseup", release);
// button.onmousedown = hold;
// button.onmouseup = release;
// let intervalId = setInterval (hold, 1000);