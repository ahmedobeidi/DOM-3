const resultPara = document.getElementById("resultPara");

document.addEventListener("keydown", handleKeyborard);

function handleKeyborard(event) {
    if(event.altKey && event.key == "a") {
        resultPara.textContent = "True";
        resultPara.style.color = "green";
    }
    else {
        resultPara.textContent = "False";
        resultPara.style.color = "red";
    }
}