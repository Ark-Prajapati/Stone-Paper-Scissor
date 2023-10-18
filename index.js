const buttons = document.querySelectorAll(".buttons")
let yourChoice = document.querySelector("#yourChoice")
let computerChoice = document.querySelector("#computerChoice")
let winner = document.querySelector("#winner")
let yourScore = document.querySelector('#yScore')
let computerScore = document.querySelector('#cScore')
let a = 1;
let b = 1;
let numberOfGamesPlayed = 1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        yourChoice.innerHTML = `Your choice: ${button.innerHTML}`

        let randomNumber = Math.floor(Math.random() * 3)

        if(randomNumber == 0){
            computerChoice.innerHTML = `Computer's choice: Stone`
        }
        if(randomNumber == 1){
            computerChoice.innerHTML = `Computer's choice: Paper`
        }
        if(randomNumber == 2){
            computerChoice.innerHTML = `Computer's choice: Scissor`
        }

        //generating result

        if((button.innerHTML == "Stone" && randomNumber == 0) || (button.innerHTML == "Paper" && randomNumber == 1) || (button.innerHTML == "Scissor" && randomNumber == 2) ){
            winner.innerHTML = `Winner: It's a tie`
        }

        if(button.innerHTML == "Stone" && randomNumber == 1){
            winner.innerHTML = `Winner: Computer won`
        }
        if(button.innerHTML == "Stone" && randomNumber == 2){
            winner.innerHTML = `Winner: You won`
        }
        if(button.innerHTML == "Paper" && randomNumber == 0){
            winner.innerHTML = `Winner: You won`
        }
        if(button.innerHTML == "Paper" && randomNumber == 2){
            winner.innerHTML = `Winner: Computer won`
        }
        if(button.innerHTML == "Scissor" && randomNumber == 0){
            winner.innerHTML = `Winner: Computer won`
        }
        if(button.innerHTML == "Scissor" && randomNumber == 1){
            winner.innerHTML = `Winner: You won`
        }

        //counting who won how many times

        if(winner.innerHTML == "Winner: You won"){
            yourScore.innerHTML = a++
        }
        if(winner.innerHTML == "Winner: Computer won"){
            computerScore.innerHTML = b++
        }

        //review for each game

        //for what computer chose
        let whatComputerChose;

        if(randomNumber == 0){
            whatComputerChose = "stone"
        }
        if(randomNumber == 1){
            whatComputerChose = "paper"
        }
        if(randomNumber == 2){
            whatComputerChose = "scissor"
        }

        //for showing the number of game

        //for showing the winner
        let conquerer;

        if(winner.innerHTML == "Winner: You won"){
            conquerer = winner.innerHTML.slice(8, 15)
        }
        if(winner.innerHTML == "Winner: Computer won"){
            conquerer = winner.innerHTML.slice(8, 20)
        }
        if(winner.innerHTML == "Winner: It's a tie"){
            conquerer = winner.innerHTML.slice(15, 18)
        }

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const div = document.createElement('div')
        const gameNumber = document.createElement('h3')
        const textNode1 = document.createTextNode(`Game number: ${numberOfGamesPlayed++}`)
        const textNode2 = document.createTextNode(`You chose: ${button.innerHTML} `)
        const textNode3 = document.createTextNode(`Computer chose: ${whatComputerChose} `)
        const textNode4 = document.createTextNode(`Result: ${conquerer} `)
        const lineBreak1 = document.createElement('br')
        const lineBreak2 = document.createElement('br')
        const lineBreak3 = document.createElement('br')

        const w = gameNumber.appendChild(textNode1)
        const x = p1.appendChild(textNode2)
        const y = p2.appendChild(textNode3)
        const z = p3.appendChild(textNode4)

        div.style.width = '200px'
        div.style.height = '80px'
        div.style.backgroundColor = "#FCE77E"
        div.style.marginTop = "20px"
        div.style.color = "#FA6166"
        div.style.padding = '20px'
        div.style.borderRadius = '10px'

        // document.body.appendChild(w)
        // document.body.appendChild(lineBreak1)
        // document.body.appendChild(x)
        // document.body.appendChild(lineBreak2)
        // document.body.appendChild(y)
        // document.body.appendChild(lineBreak3)
        // document.body.appendChild(z)

        div.appendChild(w)
        div.appendChild(lineBreak1)
        div.appendChild(x)
        div.appendChild(lineBreak2)
        div.appendChild(y)
        div.appendChild(lineBreak3)
        div.appendChild(z)

        document.body.appendChild(div)

    })
})
