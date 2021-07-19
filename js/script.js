const background = document.querySelector('.background');

const makeRed = document.querySelector('#red');
const makeOrange = document.querySelector('#orange');
const makePurple = document.querySelector('#purple');
const makeGreen = document.querySelector('#green');

const redBackground = () => {
    background.classList.add('red');
    background.classList.remove('orange', 'purple', 'green');
}

makeRed.addEventListener('click', redBackground);

const orangeBackground = () => {
    background.classList.add('orange');
    background.classList.remove('red', 'purple', 'green');
}

makeOrange.addEventListener('click', orangeBackground);

const purpleBackground = () => {
    background.classList.add('purple');
    background.classList.remove('red', 'orange', 'green');
}

makePurple.addEventListener('click', purpleBackground);

const greenBackground = () => {
    background.classList.add('green');
    background.classList.remove('red', 'purple', 'orange');
}

makeGreen.addEventListener('click', greenBackground);