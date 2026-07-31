let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let name = document.querySelector("h1");

let turnO = true//player X , player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () => {
    turnO = true;
    name.innerText = "Tic Tac Toe";
    enableBoxes();
};


boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "#ef476f";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#023047";
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    name.innerText = `Conngratulation, Winner is ${winner}`;
    disableBoxes();
}

const checkWinner = () =>{
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != ""  && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
