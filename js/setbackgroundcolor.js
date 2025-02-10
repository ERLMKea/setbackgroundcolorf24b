console.log("mit første javascript")

let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

const bdy = document.querySelector("body");
console.log(bdy);

let inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);

const pTags = document.getElementsByTagName('p')
console.log(pTags);

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function setBackgroundPickColor() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

let pArr = Array.from(pTags)
pArr.forEach(p => p.textContent = "jeg er ptagsxxx")

pbCol.addEventListener("click", setBackgroundColor);
document.addEventListener("keyup", setBackgroundColor);
inpColorPicker.addEventListener("input", setBackgroundPickColor);
