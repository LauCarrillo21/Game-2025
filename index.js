let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

function startGame(){
    let sectionSelectAttack = document.getElementById("select-attack")
    sectionSelectAttack.style.display = 'none'

    let sectionRestart = document.getElementById("restart")
    sectionRestart.style.display = 'none'


    let buttonPetPlayer = document.getElementById("button-pet")
    buttonPetPlayer.addEventListener("click",selectPlayerPet)

    let buttonWater = document.getElementById("button-water")
    buttonWater.addEventListener("click", attackWater)
    let buttonFire =  document.getElementById("button-fire")
    buttonFire.addEventListener("click", attackFire)
    let buttonEarth =  document.getElementById("button-earth")
    buttonEarth.addEventListener("click", attackEarth)

    let buttonRestart=  document.getElementById("restart-button")
    buttonRestart.addEventListener("click", restartGame)
}

function selectPlayerPet(){
     let sectionSelectPet = document.getElementById("select-pet")
     sectionSelectPet.style.display = 'none'


    let sectionSelectAttack = document.getElementById("select-attack")
    sectionSelectAttack.style.display = 'flex'

    let inputAxolotl = document.getElementById("axolotl")
    let inputEagle = document.getElementById("eagle")
    let inputJaguar = document.getElementById("jaguar")
    let spanPlayerPet = document.getElementById("player-pet")

    if (inputAxolotl.checked) {
        spanPlayerPet.innerHTML = 'Axolotl 🩷'
    } else if (inputEagle.checked) {
       spanPlayerPet.innerHTML = '🦅'
    } else if (inputJaguar.checked) {
        spanPlayerPet.innerHTML = '🐆'
    } else {
        alert("Please choose a valid option")
    }
    selectEnemyPet()
}

function selectEnemyPet(){
    let randomPet = random(1,3)
    let spanEnemyPet = document.getElementById("enemy-pet")

    if (randomPet == 1) {
        spanEnemyPet.innerHTML = 'Axolotl 🩷'
    } else if (randomPet == 2) {
        spanEnemyPet.innerHTML = 'Eagle 🦅'
    } else {
        spanEnemyPet.innerHTML = 'Jaguar 🐆'
    }
}

function attackWater () {
    playerAttack = "Water"
    enemyRandomAttack()
}

function attackFire () {
    playerAttack = "Fire"
    enemyRandomAttack()
}

function attackEarth () {
    playerAttack = "Earth"
    enemyRandomAttack()
}

function enemyRandomAttack () {
    let randomAttack = random(1,3)

    if (randomAttack == 1) {
        enemyAttack = 'Water'
    } else if (randomAttack == 2) {
        enemyAttack = 'Fire'
    } else {
        enemyAttack = 'Earth'
    }
    fight()
}

function fight() {
        let spanPlayerLives = document.getElementById("player-lives")
        let spanEnemyLives = document.getElementById("enemy-lives")
        //Game Rules
        if (playerAttack == enemyAttack) {
            createMessage("It's a tie");
        }else if (playerAttack == 'Fire' && enemyAttack== 'Earth') {
            createMessage("You win");
            enemyLives--
            spanEnemyLives.innerHTML = enemyLives
        }else if (playerAttack == 'Water' && enemyAttack == 'Fire') {
            createMessage("You win");
            enemyLives--
            spanEnemyLives.innerHTML = enemyLives
        }else if (playerAttack == 'Earth' && enemyAttack == 'Water') {
            createMessage("You win");
            enemyLives--
            spanEnemyLives.innerHTML = enemyLives
        } else {
            createMessage("You lose");
            playerLives--
            spanPlayerLives.innerHTML = playerLives
        }
        checkLives()
    }

function checkLives(){
    if (enemyLives == 0) {
        createFinalMessage("You win!")
    } else if (playerLives == 0) {
        createFinalMessage("You lose!")
    } 
}

function createMessage (result) {
    let messagesSection = document.getElementById("result")
    let playerAttackContainer = document.getElementById("player-attacks")
    let enemyAttackContainer = document.getElementById("enemy-attacks")

    let newPlayerAttack = document.createElement("p");
    let newEnemyAttack = document.createElement("p");

    // Use a separate variable for the attack name to avoid confusion
    let playerAttackText = playerAttack;
    let enemyAttackText = enemyAttack;

    // Assign the correct values
    newPlayerAttack.innerHTML = playerAttackText;
    newEnemyAttack.innerHTML = enemyAttackText;

    // Append to the containers
    playerAttackContainer.appendChild(newPlayerAttack);
    enemyAttackContainer.appendChild(newEnemyAttack);

    messagesSection.innerHTML = result;

}

function createFinalMessage(finalResult) {
    let messagesSection = document.getElementById("result")

    messagesSection.innerHTML = finalResult

    let buttonFire = document.getElementById("button-fire")
    buttonFire.disabled = true
    let buttonWater = document.getElementById("button-water")
    buttonWater.disabled = true
    let buttonEarth = document.getElementById("button-earth")
    buttonEarth.disabled = true

    let sectionRestart = document.getElementById('restart')
    sectionRestart.style.display = 'block'
}

function restartGame () {
    location.reload()
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }


window.addEventListener("load",startGame)