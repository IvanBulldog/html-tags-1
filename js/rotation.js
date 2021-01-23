const textList = [
    'TEMPLATE',
    'SERVICES',
    'SOLUTIONS'
];

let currTextId = 0;

function showCurrentText() {
    const textContainer = document.querySelector('.borders .js-rotation');
    textContainer.innerText = textList[currTextId];
}
showCurrentText();

function nextTextRotation() {
    currTextId++;
    if (currTextId >= textList.length) currTextId = 0;
    showCurrentText();
}

setInterval(nextTextRotation, 1500);