var h3 = document.querySelector("h3");
var colorLeft = document.querySelector("[name=colorLeft]");
var colorRight = document.querySelector("[name=colorRight]");
var colorBottom = document.querySelector("[name=colorBottom]");
var colorTop = document.querySelector("[name=colorTop]");
var body = document.getElementById("body")

function setGradient() {
    body.style.background = "linear-gradient(to right," +
        colorLeft.value +
        "," + colorTop.value +
        "," + colorBottom.value +
        "," + colorRight.value +
        ")";

    h3.textContent = body.style.background + ";";
}

colorTop.addEventListener("input", setGradient);
colorLeft.addEventListener("input", setGradient);
colorRight.addEventListener("input", setGradient);
colorBottom.addEventListener("input", setGradient);