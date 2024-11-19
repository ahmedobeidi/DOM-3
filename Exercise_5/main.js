const images = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg"];
const button = document.getElementById("button");
const div = document.getElementById("box");
const image = document.getElementById("image");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
let count = 0;

button.addEventListener("click", handleButtonClick);
next.addEventListener("click", handleNextButton);
previous.addEventListener("click", handlePreviousButton);

function handleButtonClick() {
    image.src = images[0];
    image.style.display = "block";
    next.style.display = "block";
    previous.style.display = "block";
    button.style.display = "none";
}

function handleNextButton() {
    if (count + 1 < images.length) {
        count++;
        image.src = images[count];
        console.log(images[count]);
    }
    else {
        count = 0;
        image.src = images[count];
        console.log(images[count]);
    }
}

function handlePreviousButton() {
    if (count - 1 > -1) {
        count--;
        image.src = images[count];
        console.log(images[count]);
    }
    else {
        count = images.length - 1;
        image.src = images[count];
        console.log(images[count]);
    }
}