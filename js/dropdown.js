console.log("hej jeg er dropdown")
const colArray = ["red", "green", "yellow", "blue", "orange"]

function addColors(btn) {
    ddColor.innerHTML = "";
    colArray.forEach(fillDropdown);
    console.log(document.querySelectorAll("*"));
}

const pbFillDropdown = document.getElementById("pbFillDropdown");
const ddColor = document.getElementById("ddColor");
const bdy = document.querySelector("body");


function fillDropdown(item) {
    const el = document.createElement("option");
    el.textContent = item;
    ddColor.appendChild(el);
}

function setBackgroundColor(ev) {
    console.log(ev);
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color;

}


pbFillDropdown.addEventListener("click", addColors);
ddColor.addEventListener('change', setBackgroundColor)

