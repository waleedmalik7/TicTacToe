let cells = document.querySelectorAll(".cell");
cells = Array.from(cells);

let currentPlayer = "X";
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function highlightCells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add("highlight");
    })
}

function checkwin(){
    winningCombos.forEach(function(combination){

        let check = combination.every(function(index){
            return cells[index].innerText.trim() == currentPlayer});

        if(check){
            highlightCells(combination);
        }

    })
}

cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != "") return;
        cell.innerText = currentPlayer;
        checkwin();
        if (currentPlayer == "X"){
            currentPlayer = "O";
        }else if(currentPlayer == "O") {
            currentPlayer = "X";
        }
    })
})



