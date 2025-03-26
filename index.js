function startGame(){
    let buttonPetPlayer = document.getElementById("button-pet")
    buttonPetPlayer.addEventListener("click",selectPlayerPet)
}

function selectPlayerPet(){
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
    let randomAttack = random(1,3)
    let spanEnemyPet = document.getElementById("enemy-pet")

    if (randomAttack == 1) {
        spanEnemyPet.innerHTML = 'Axolotl'
    } else if (randomAttack == 2) {
        spanEnemyPet.innerHTML = 'Eagle'
    } else {
        spanEnemyPet.innerHTML = 'Jaguar'
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }


window.addEventListener("load",startGame)