const numberHex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "F",
];

const hexDisplay = document.querySelector(".display-hex"),
    btnClick = document.querySelector(".btn-click"),
    body = document.querySelector(".body");

btnClick.addEventListener("click", () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += numberHex[randomFunc()];
    }
    hexDisplay.innerHTML = hexCode;
    body.style.backgroundColor = hexCode;
});

const randomFunc = () => {
    return Math.floor(Math.random() * 15);
};
