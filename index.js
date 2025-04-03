const sectionSelectAttack = document.getElementById("select-attack")
const sectionRestart = document.getElementById("restart")
const buttonPetPlayer = document.getElementById("button-pet")
const buttonWater = document.getElementById("button-water")
const buttonFire =  document.getElementById("button-fire")
const buttonEarth =  document.getElementById("button-earth")
const buttonRestart=  document.getElementById("restart-button")

const sectionSelectPet = document.getElementById("select-pet")
const inputAxolotl = document.getElementById("axolotl")
const inputEagle = document.getElementById("eagle")
const inputJaguar = document.getElementById("jaguar")
const spanPlayerPet = document.getElementById("player-pet")

const spanEnemyPet = document.getElementById("enemy-pet")

const spanPlayerLives = document.getElementById("player-lives")
const spanEnemyLives = document.getElementById("enemy-lives")

const messagesSection = document.getElementById("result")
const playerAttackContainer = document.getElementById("player-attacks")
const enemyAttackContainer = document.getElementById("enemy-attacks")

let pets = []
let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3

class Pet {
    constructor (name, image, life) {
        this.name = name
        this.image = image
        this.life = life
        this.attacks = []
    }
}

let axolotl = new Pet ("Axolotl","/assets/Axolotl.png", 5)
let eagle = new Pet ("Eagle","/assets/Eagle.png", 5)
let jaguar = new Pet ("Jaguar","/assets/Jaguar.png", 5)




function startGame(){
    sectionSelectAttack.style.display = 'none'

    sectionRestart.style.display = 'none'
    
    buttonPetPlayer.addEventListener("click",selectPlayerPet)

    buttonWater.addEventListener("click", attackWater)
    buttonFire.addEventListener("click", attackFire)
    buttonEarth.addEventListener("click", attackEarth)
   
    buttonRestart.addEventListener("click", restartGame)
}

function selectPlayerPet(){
    sectionSelectPet.style.display = 'none'
    
    sectionSelectAttack.style.display = 'flex'

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
    messagesSection.innerHTML = finalResult

    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonEarth.disabled = true

    sectionRestart.style.display = 'block'
}

function restartGame () {
    location.reload()
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }


window.addEventListener("load",startGame)