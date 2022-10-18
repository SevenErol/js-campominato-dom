
const gridButton = document.getElementById("grid_generator");

const gridElement = document.querySelector(".game_grid");

const tenRow = 10;

const tenCol = 10;

const nineRow = 9;

const nineCol = 9;

const sevenRow = 7;

const sevenCol = 7;

const levelsElement = document.getElementById("difficulties");


function generateGrid(rows, cols, grid) {

    for (let i = 0; i < (rows * cols); i++) {

        const singleCell = document.createElement("div");

        if (rows === 10 && cols === 10) {

            singleCell.classList.add("cell_10");

            grid.appendChild(singleCell);

            const thisNumber = i + 1;

            singleCell.innerHTML = thisNumber;

        } else if (rows === 9 && cols === 9) {

            singleCell.classList.add("cell_9");

            grid.appendChild(singleCell);

            const thisNumber = i + 1;

            singleCell.innerHTML = thisNumber;

        } else if (rows === 7 && cols === 7) {

            singleCell.classList.add("cell_7");

            grid.appendChild(singleCell);

            const thisNumber = i + 1;

            singleCell.innerHTML = thisNumber;

        }


    }

    return true;

}


function clickableCell(nodeList) {

    for (let i = 0; i < nodeList.length; i++) {

        const thisCell = nodeList[i];

        thisCell.addEventListener("click", function () {

            thisCell.classList.toggle("aqua");

            console.log(this);
        })
    }
}


let easyRule = true;

let regularRule = true;

let hardRule = true;

gridButton.addEventListener("click", function () {


    if (levelsElement.value === "easy" && easyRule === true) {

        while (gridElement.firstChild){

            gridElement.removeChild(gridElement.firstChild);

        }
        easyRule = false;

        regularRule = true;

        hardRule = true;

        generateGrid(tenRow, tenCol, gridElement);

        const everyCell = document.querySelectorAll(".cell_10");

        clickableCell(everyCell);

    } else if (levelsElement.value === "regular" && regularRule === true) {

        while (gridElement.firstChild){

            gridElement.removeChild(gridElement.firstChild);

        }

        regularRule = false;

        easyRule = true;

        hardRule = true;

        generateGrid(nineRow, nineCol, gridElement);

        const everyCell = document.querySelectorAll(".cell_9");

        clickableCell(everyCell);

    } else if (levelsElement.value === "hard" && hardRule === true) {

        while (gridElement.firstChild){

            gridElement.removeChild(gridElement.firstChild);

        }

        hardRule = false;

        easyRule = true;

        regularRule = true;

        generateGrid(sevenRow, sevenCol, gridElement);

        const everyCell = document.querySelectorAll(".cell_7");

        clickableCell(everyCell);

    }



});

