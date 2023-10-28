let gameEle = document.getElementById("gameResult");
let userEle = document.getElementById("userInput");
let randNo = Math.ceil(Math.random() * 100);

function checkGuess() {
    let valueEle = parseInt(userEle.value)
    if (randNo < valueEle) {
        gameEle.textContent = "Too High!!";
        gameEle.style.backgroundColor = "#1e217c";
    }
    else if (randNo > valueEle) {
        gameEle.textContent = "Too Low!!";
        gameEle.style.backgroundColor = "#1e217c";
    }
    else if (randNo == valueEle) {
        gameEle.textContent = "congratulations your prediction is correct!!";
        gameEle.style.backgroundColor = "green";
    }
    else {
        gameEle.textContent = "Not vaolid!! Try again";
        gameEle.style.backgroundColor = "#1e217c";
    }
}