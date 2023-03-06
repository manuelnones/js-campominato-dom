const btnEl = document.getElementById(`btn`);
const mainContainerEl = document.getElementById(`main-container`);
const levelEl = document.getElementById(`level`);

btnEl.addEventListener(`click`, function () {
    mainContainerEl.innerHTML = ``;

    if (levelEl.value == 1) {
        createGrid (100, 10);

    } else if (levelEl.value == 2) {
        createGrid (81, 9);

    } else if (levelEl.value == 3) {
        createGrid (49, 7);

    }

});

function createSquare(squareText, columnNumber) {
    let newSquareEl = document.createElement(`div`);
    newSquareEl.classList.add(`square`);
    newSquareEl.style.width = `calc(100% / ${columnNumber})`;
    newSquareEl.style.height = `calc(100% / ${columnNumber})`;
    newSquareEl.textContent = squareText;

    return newSquareEl;
};

function createGrid(squareNumber, columnNumber) {
    let newGridEl = document.createElement(`div`);
    newGridEl.classList.add(`grid`);
    mainContainerEl.append(newGridEl);

    for (let i = 1; i <= squareNumber; i++) {
        let squareEl = createSquare (i, columnNumber);
        newGridEl.append(squareEl);

        squareEl.addEventListener(`click`, function () {
            squareEl.classList.toggle(`active`);
        });
        
    }
    return squareEl;
};