const images = ["01.jpg", "02.jpg", "03.jpg"];

const choseimage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `./img/${choseimage}`;

const bg = document.createElement("div");
bg.classList.add("bg");

bg.appendChild(bgimage);

console.log(bg);

document.body.appendChild(bg);