const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const inputs = document.querySelector(".inputs");



let number = 0;
function hold() {
number++;
if (button.onclick) {
    console.log(number);
}

}

setInterval(hold, 500);

