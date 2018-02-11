const spl = document.querySelector('.splEffect');

let color1 = 100;
let color2 = 0;

let interval = setInterval(() => {
    colorChange(color1, color2);
    spl.style.background = `-webkit-linear-gradient(300deg, #ffff00 ${color1}%, #ffffff ${color2}%)`;
    spl.style.webkitBackgroundClip = 'text';
    spl.style.webkitTextFillColor = 'transparent';
}, 1);

function colorChange() {
    color1--;
    //color2++;
    if (color1 < 1) {
        clearInterval(interval);
    }
}