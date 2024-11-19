const divs = document.querySelectorAll("div");
const colors = ["Green", "blue", "red", "yellow", "brown"];
let counter = 0;

divs.forEach((div) => {
    div.addEventListener("click", handleColors);
});

function handleColors(event) {
    if (counter === colors.length) {
        event.target.style.backgroundColor = "white";
        counter = 0;
    }
    else {
        event.target.style.backgroundColor = colors[counter];
        counter++;
    }

}
