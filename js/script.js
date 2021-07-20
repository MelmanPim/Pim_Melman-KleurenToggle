// Open menu on click
/* const colorNavigation = document.querySelector('#navigationContainer');

const showMenu = () => {
    colorNavigation.classList.add('show');
}

colorNavigation.addEventListener('onmouseenter', showMenu); */

document.getElementById("navigationContainer").addEventListener("mouseenter", mouseEnter);
document.getElementById("navigationContainer").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    document.getElementById("navigation").style.left = "0.5em";
}

function mouseLeave() {
    document.getElementById("navigation").style.left = "-30em";
}

// Verander achtergrond kleur

const background = document.querySelector('.background');

const makeRed = document.querySelector('#red');
const makeOrange = document.querySelector('#orange');
const makePurple = document.querySelector('#purple');
const makeGreen = document.querySelector('#green');

const redBackground = () => {
    document.body.style.backgroundColor = 'red';
    document.getElementById("navigation").style.left = "-30em";
}

makeRed.addEventListener('click', redBackground);

const orangeBackground = () => {
    document.body.style.backgroundColor = 'orange';
    document.getElementById("navigation").style.left = "-30em";
}

makeOrange.addEventListener('click', orangeBackground);

const purpleBackground = () => {
    document.body.style.backgroundColor = 'purple';
    document.getElementById("navigation").style.left = "-30em";
}

makePurple.addEventListener('click', purpleBackground);

const greenBackground = () => {
    document.body.style.backgroundColor = 'green';
    document.getElementById("navigation").style.left = "-30em";
}

makeGreen.addEventListener('click', greenBackground);