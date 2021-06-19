// modules
const gameBoard = (() => {
    let _gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
    let cellBtns = document.querySelectorAll(".cells");
cellBtns.forEach(cell => cell.addEventListener("click", placeMarker));
    const showGameBoard = () => _gameBoard;

    const updateBoard = (marker, index) => {
        _gameBoard[index] = marker;
    };


    return {
        showGameBoard,
        updateBoard
    };
})();

const displayController = (() => {
    let _gameBoard = gameBoard.showGameBoard();
    let _ulContainer = document.querySelector("#cell-container");

    const _appendCell = (element, index) => {
        let cell = document.createElement("li");
        cell.classList.add("cells");
        cell.setAttribute("id", `${index}`);
        cell.textContent = element;
        _ulContainer.appendChild(cell);
        }
    
    const displayBoard = () => {
        _gameBoard.forEach(_appendCell)
    }

    return {
        displayBoard
    };
})();


//factory
const Player = (marker) => {

    const placeMarker = marker => {
        gameBoard.updateBoard(marker, index);
    };
    return {}
};

displayController.displayBoard();


