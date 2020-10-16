function changeSquares() {
    let keepGoing = true;

    while (keepGoing) {
        n = Math.round(parseInt(prompt("How many squares per side do you want? Keep it under 100 please.", 8)));
        if (n < 100) {
            keepGoing = false;
        }
    }

    document.documentElement.style.setProperty("--columns-row", n);
    addDivBlack();
}
/* Tecnica demasiado sádica. Básicamente se crea una variable, en este caso llamada
"--columns-row". Asumo tiene que empezar con --. Esa variable se coloca como una propiedad
del Style del root (recuerda que documentElement es el root), haciendola :root {variable}.
Luego accedemos a ella con setProperty como sale arriba, y le asociamos la variable que necesitemos*/


function addDivColor() {
    content.innerHTML = "";
    for (let i = 0; i < (n * n); i++) {
        const grid = document.createElement("div");
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);



        grid.classList.add("grid");
        content.appendChild(grid);
        grid.addEventListener("mouseover", () => {
            grid.style.background = `rgb(${red},${green},${blue})`;
        })
    }
}

function addDivBlack() {
    content.innerHTML = "";
    for (let i = 0; i < (n * n); i++) {
        const grid = document.createElement("div");
        let dark = 255;

        grid.classList.add("grid");
        content.appendChild(grid);
        grid.addEventListener("mouseover", () => {
            dark -= 25;
            grid.style.background = `rgb(${dark},${dark},${dark})`;
        })
    }
}

function resetColor() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => grid.style.background = "white");
}

function deleteChilds() {
    content.innerHTML = "";
}


const content = document.querySelector(".content");
const reset = document.getElementById("reset");

let n = 16;

document.documentElement.style.setProperty("--columns-row", n);

addDivBlack(n);


reset.addEventListener("click", resetColor);
squares.addEventListener("click", changeSquares);
rainbow.addEventListener("click", addDivColor);
black.addEventListener("click", addDivBlack);














