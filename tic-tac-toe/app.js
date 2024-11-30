let boxes = document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset-btn");
let newBtn=document.getElementById("new-btn");
let msg=document.getElementById("msg");
let msgContainer = document.getElementsByClassName("msg-container")

let turn0 = true;
let count = 0;


const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = '0';
            turn0 = false;
        } else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinnner();
        if (count === 9 && !iswinner) {
            gameDraw();
        }
    });
});
