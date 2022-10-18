
const gridButton = document.getElementById("grid_generator");

const gridElement = document.querySelector(".game_grid");

const levelsElement = document.getElementById("difficulties");

const displayMatchResults = document.querySelector(".match_display");

let points = 0;

let verify = true;

function generateRandomNumbers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}


function generateGrid(totalArea, grid) {

    displayMatchResults.innerHTML = `Il tuo attuale punteggio è: ${points}`

    for (let i = 0; i < (totalArea); i++) {

        const singleCell = document.createElement("div");

        grid.appendChild(singleCell);

        const thisNumber = i + 1;

        singleCell.innerHTML = thisNumber;

        if (totalArea === 100) {

            singleCell.classList.add("cell_10");

        } else if (totalArea === 81) {

            singleCell.classList.add("cell_9");

        } else if (totalArea === 49) {

            singleCell.classList.add("cell_7");

        }


    }

    return true;

}


function clickableCell(nodeList, listBombs) {

    for (let i = 0; i < nodeList.length; i++) {

        const thisCell = nodeList[i];

        const numberInCell = thisCell.innerText * 1;

        if (listBombs.includes(numberInCell)) {

            counter = 16;

            thisCell.addEventListener("click", function bombEvent() {

                thisCell.classList.toggle("red");

                console.log(this.innerText * 1);

                displayMatchResults.innerHTML = "Peccato! hai perso";

            })



        } else {

            thisCell.addEventListener("click", function cellEvent() {

                thisCell.classList.toggle("aqua");
    
                console.log(this.innerText * 1);
    
                points++
    
                displayMatchResults.innerHTML = `Il tuo attuale punteggio è: ${points}`;
    
            })


        }  


    }



}

function generateBombs(min, max) {

    const bombs = [];

    while (bombs.length !== 16) {

        const singleBomb = generateRandomNumbers(min, max);

        if (!bombs.includes(singleBomb)) {

            bombs.push(singleBomb);

        }
    }

    return bombs
}


gridButton.addEventListener("click", function () {

    const totalArea = Math.pow(levelsElement.value, 2);

    while (gridElement.firstChild) {

        gridElement.removeChild(gridElement.firstChild);

    }

    generateGrid(totalArea, gridElement);

    const listBombs = generateBombs(1, totalArea);

    console.log(listBombs);


    if (levelsElement.value === "10") {

        const everyCell = document.querySelectorAll(".cell_10");

        clickableCell(everyCell, listBombs);

    } else if (levelsElement.value === "9") {

        const everyCell = document.querySelectorAll(".cell_9");

        clickableCell(everyCell, listBombs);

    } else if (levelsElement.value === "7") {

        const everyCell = document.querySelectorAll(".cell_7");

        clickableCell(everyCell, listBombs);

    }

});


