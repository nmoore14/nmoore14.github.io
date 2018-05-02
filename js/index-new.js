let sideHeight = screen.height;
let finalHeight = sideHeight + "px";
console.log(sideHeight);
const sideElem = document.getElementById('sideNav');
const contentElem = document.getElementById('content');
sideElem.style.height = `${finalHeight}`;
contentElem.style.height = `${finalHeight}`;
