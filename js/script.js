const btnEl = document.getElementById(`btn`);
const mainContainerEl = document.getElementById(`main-container`);

btnEl.addEventListener(`click`, function () {
    mainContainerEl.innerHTML = ``;

    const newGridEl = document.createElement(`div`);
    newGridEl.classList.add(`grid`);
    mainContainerEl.append(newGridEl);

    for (let i = 1; i <= 100; i++) {
        let squareEl = createSquare(i, 10);
        newGridEl.append(squareEl);

        squareEl.addEventListener(`click`, function () {
            squareEl.classList.toggle(`active`);
        });
    }
    
});

function createSquare(squareNumber, columnNumber) {
    let newSquareEl = document.createElement(`div`);
    newSquareEl.classList.add(`square`);
    newSquareEl.style.width = `calc(100% / columnNumber)`;
    newSquareEl.style.height = `calc(100% / columnNumber)`;
    newSquareEl.textContent = squareNumber;

    return newSquareEl;
};