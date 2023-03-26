const playbtn = document.getElementById("playagain")

playbtn.addEventListener("click", (e) => {
    location.reload()
})

function gameDone(winner) {
    document.getElementsByClassName("overlay")[0].classList.toggle("overlay-active")
    document.getElementsByClassName("backchanger")[0].classList.toggle("backchanger-active")
    let text = winner == "Tied" ? `Game ${winner}` : `${winner} Has Won the Game`
    document.getElementsByClassName("overlay-body")[0].innerText = text
    if (winner == "Tied") {
        text = "Tied"
    }
    else {
        text = "Winner"
    }
    document.getElementsByClassName("overlay-header")[0].innerText = text
}