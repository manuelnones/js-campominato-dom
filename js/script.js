/*
    - creare un array di 16 numeri casuali
    - se il livello è facile
        o inserire l'array di numeri tra il numero 1 e 100
    - altrimenti se il livello è medio
        o inserire l'array di numeri tra il numero 1 e 81
    - altrimenti se il livello è difficile
        o inserire l'array di numeri tra il numero 1 e 49
*/

const btnEl = document.getElementById(`btn`);
const mainContainerEl = document.getElementById(`main-container`);
const levelEl = document.getElementById(`level`);
const bombElements = arrayNumberGenerator(16);
console.log(bombElements)

btnEl.addEventListener(`click`, function () {
    mainContainerEl.innerHTML = ``;

    if (levelEl.value == 1) {
        createGrid(100, 10);

    } else if (levelEl.value == 2) {
        createGrid(81, 9);

    } else if (levelEl.value == 3) {
        createGrid(49, 7);

    };

});

function createSquare(squareText, columnNumber) {
    let squareEl = document.createElement(`div`);
    squareEl.classList.add(`square`);
    squareEl.style.width = `calc(100% / ${columnNumber})`;
    squareEl.style.height = `calc(100% / ${columnNumber})`;
    squareEl.textContent = squareText;

    squareEl.addEventListener(`click`, function () {
        squareEl.classList.toggle(`active`);
    });

    return squareEl;
};

function createGrid(squareNumber, columnNumber) {
    let newGridEl = document.createElement(`div`);
    newGridEl.classList.add(`grid`);
    mainContainerEl.append(newGridEl);

    for (let i = 1; i <= squareNumber; i++) {
        squareEl = createSquare(i, columnNumber);
        newGridEl.append(squareEl);

    };

    return squareEl;
};

function randomNumberGenerator(lastNumber) {
    let randomNumber = Math.floor(Math.random() * lastNumber + 1);
    
    return randomNumber;
};

function arrayNumberGenerator() {
    let arrayNumbers = [
        randomNumberGenerator(16), randomNumberGenerator(16), randomNumberGenerator(16),
        randomNumberGenerator(16), randomNumberGenerator(16), randomNumberGenerator(16),
        randomNumberGenerator(16), randomNumberGenerator(16), randomNumberGenerator(16),
        randomNumberGenerator(16), randomNumberGenerator(16), randomNumberGenerator(16),
        randomNumberGenerator(16), randomNumberGenerator(16), randomNumberGenerator(16),
        randomNumberGenerator(16)
    ];

    return arrayNumbers;
};