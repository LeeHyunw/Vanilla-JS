const clock = document.querySelector("h1#clock");

const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

clock.innerText = `${hour} : ${minute} : ${second}`;

function sayHello() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour} : ${minute} : ${second}`;
}

setInterval(sayHello, 1000);

console.log(new Date().getFullYear());