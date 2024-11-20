const resultPara = document.getElementById("resultPara");

document.addEventListener("keydown", handleKeyborard);

function handleKeyborard(event) {
    if(event.altKey && event.key == "a") {
        resultPara.textContent = "True";
        resultPara.style.color = "green";
    }
    else if (event.shiftKey && event.ctrlKey && event.key == "A") {
        resultPara.textContent = "True";
        resultPara.style.color = "brown";
    }
    else {
        resultPara.textContent = "False";
        resultPara.style.color = "red";
    }
}