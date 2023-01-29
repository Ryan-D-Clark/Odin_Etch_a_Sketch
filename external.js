let squareSize
let gridSize
let gridWidth = 700
let gridHeight = 700
let auto = "auto "

interactiveSquares()

function interactiveSquares(){
    let squares = document.querySelectorAll(".square")
    squares.forEach((square =>{
        square.addEventListener("mousedown", () =>{
            square.style.background = "black";
        })
        square.addEventListener("dblclick", () =>{
            square.style.background = "white";
        })

    }))
}


function createGrid(){
    let gridSize = prompt("Enter grid size (max 100)", 20);
    deleteGrid();

    for(let i = 1; i <= gridSize * gridSize; i++){
        let square = document.createElement("div")
        square.classList.add("square")
        document.getElementById("sketch-container").appendChild(square)
    }
    let squares = document.querySelectorAll(".square")
    for(let i = 0; i < squares.length; i++){
        squares[i].style.height = (gridHeight/gridSize) + "px"
        squares[i].style.width = (gridWidth/gridSize) + "px"
    }
    document.getElementById("sketch-container").style.gridTemplateColumns = auto.repeat(gridSize)
    document.getElementById("sketch-container").style.gridTemplateRows = auto.repeat(gridSize)
    interactiveSquares()
}

function deleteGrid(){
    document.getElementById("sketch-container").replaceChildren()
}

