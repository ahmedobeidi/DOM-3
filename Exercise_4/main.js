const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseenter", handleMouseEnter);
    div.addEventListener("mouseout", handleMouseOut);
    div.addEventListener("mousedown", handleMouseDown);
    div.addEventListener("mouseup", handleMouseUp);
});

function handleMouseEnter(event) {
    event.target.style.filter = "blur(0px)";
}

function handleMouseOut(event) {
    event.target.style.filter = "blur(6px)";
}

function handleMouseDown(event) {
    event.target.style.width = "400px";
}

function handleMouseUp(event) {
    event.target.style.width = "200px";
}