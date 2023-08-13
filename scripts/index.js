class Monster {
    constructor(name, lifePoints, damage, attack) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.damage = damage;
        this.attack = attack;
    }
}

const goblin = new Monster("goblin", 10, 2, 0);
const kobold = new Monster("kobold", 10, 3, 0);
const orc = new Monster("orc", 16, 5, 0);



let pVP1 = 0;
let pVP2 = 0;

let player1 = goblin;
let player2 = orc;

const originalLifePointsPlayer1 = player1.lifePoints;
const originalLifePointsPlayer2 = player2.lifePoints;

let amountRoll = 1;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // número aleatório entre 1 e 6
}

function fight(jogador1, jogador2) {
    if (jogador1.attack > jogador2.attack) {
        jogador2.lifePoints -= jogador1.damage;
    } else if (jogador2.attack > jogador1.attack) {
        jogador1.lifePoints -= jogador2.damage;
    }
    return {
        jogador1,
        jogador2
    };
}

function victory(jogador1, jogador2) {
    if (jogador1.lifePoints <= 0) {
        pVP2 += 1;
        console.log("Jogador 2 ganhou");
        jogador1.lifePoints = originalLifePointsPlayer1;
        jogador2.lifePoints = originalLifePointsPlayer2;
        
    } else if (jogador2.lifePoints <= 0) {
        pVP1 += 1;
        console.log("Jogador 1 ganhou");
        jogador1.lifePoints = originalLifePointsPlayer1;
        jogador2.lifePoints = originalLifePointsPlayer2;
    }
    return {
        jogador1,
        jogador2
    };
}

// Rolar dados e realizar combate
const rollDiceButton = document.getElementById("btn-dice");
rollDiceButton.addEventListener("click", function() {
    for (let i = 0; i < amountRoll; i++) {
        let roll1 = rollDice();
        let roll2 = rollDice();
        
        player1.attack = roll1; // Atribuir resultado da rolagem ao jogador1
        player2.attack = roll2; // Atribuir resultado da rolagem ao jogador2
        
        console.log(`Jogador 1 rolou: ${roll1} (ataque: ${player1.attack})`);
        console.log(`Jogador 2 rolou: ${roll2} (ataque: ${player2.attack})`);
        
        let resultFight = fight(player1, player2);
        
        player1 = resultFight.jogador1; // Atualizar jogador1 com resultado do combate
        player2 = resultFight.jogador2; // Atualizar jogador2 com resultado do combate
        
        console.log("Resultado do combate:");
        console.log(player1);
        console.log(player2);
        
        victory(player1, player2);
        console.log("Placar geral:");
        console.log(pVP1, pVP2);
    }
});



