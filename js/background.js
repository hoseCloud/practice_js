const background = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const background_idx = Math.floor(Math.random() * background.length);
const chosenImage = background[background_idx];
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;
backgroundImage.id = 'bg';

document.body.appendChild(backgroundImage);