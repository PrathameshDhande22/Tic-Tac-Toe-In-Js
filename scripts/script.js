const questionwindow = document.getElementById("askquestion")
const xbtn = document.getElementById("xbtn")
const obtn = document.getElementById("obtn")
const playerelement = document.getElementsByClassName("player")
const gamewindow = document.getElementById("gmwindow")
let player1name
let player2name
let p1Choice
let p2Choice
let p1turn = true;
let count = 0;
let box = document.querySelector(".boxes")
const turnshower = document.getElementById("turnshower")
const winnningIndex = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

function showNextWindow(e) {
    let targetelem = e.target
    if (targetelem.innerText == "X") {
        p1Choice = "X"
        p2Choice = "O"
    }
    else {
        p2Choice = "X"
        p1Choice = "O"
    }
    player1name = playerelement[0].value
    player2name = playerelement[1].value
    if (player1name == "" && player2name == "") {
        player1name = "Player 1"
        player2name = "Player 2"
    }
    questionwindow.remove()
    gamewindow.style.display = "flex"
    setTurn(player1name)
    loadDetails()
}

const loadDetails = () => {
    let naming = document.getElementsByClassName("nameing")[0]
    let choices = document.getElementsByClassName("choices")[0]
    // setting the name
    naming.children[0].append(player1name)
    naming.children[1].append(player2name)
    // setting the choices
    choices.children[0].append(p1Choice)
    choices.children[1].append(p2Choice)
}

const playGame = (e) => {
    if (p1turn) {
        e.target.innerText = p1Choice
        p1turn = false
        setTurn(player2name)
    }
    else {
        e.target.innerText = p2Choice
        p1turn = true
        setTurn(player1name)
    }
    console.log(count)
    getWinner()
    e.target.style.backgroundColor = "#eb17d9"
    e.target.style.color = "white"
    e.target.disabled = true
}

function setTurn(name) {
    turnshower.innerText = `${name} Turn`
}

const getWinner = () => {
    const child = box.children
    for (let i = 0; i < winnningIndex.length; i++) {
        let innerArray = winnningIndex[i]
        if (child[innerArray[0]].innerText == p1Choice && child[innerArray[1]].innerText == p1Choice && child[innerArray[2]].innerText == p1Choice) {
            gameDone(player1name)
        }
        else if (child[innerArray[0]].innerText == p2Choice && child[innerArray[1]].innerText == p2Choice && child[innerArray[2]].innerText == p2Choice) {
            gameDone(player2name)
        }
    }
    if (count >= 8) {
        gameDone("Tied")
    }
    else {
        count++
    }
}

xbtn.addEventListener("click", showNextWindow)
obtn.addEventListener("click", showNextWindow)
Array.from(box.children).forEach((value) => {
    value.addEventListener("click", playGame)
})