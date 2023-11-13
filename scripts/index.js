class Monster {
    constructor(name, lifePoints, damage, attack) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.damage = damage;
        this.attack = attack;
    }
}

const goblin = new Monster("GOBLIN", 10, 2, 0);
const kobold = new Monster("KOBOLD", 10, 3, 0);
const orc = new Monster("ORC", 16, 5, 0);

// Engine

let pVP1 = 0;
let pVP2 = 0;

let player1 = goblin;
let player2 = orc;



function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function fight(dicePlayer1, dicePlayer2) {

    let jogador1 = player1;
    let jogador2 = player2;

    if (dicePlayer1 > dicePlayer2) {
        jogador2.lifePoints -= jogador1.damage;
    } else if (dicePlayer2 > dicePlayer1) {
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
        jogador1.lifePoints = jogador1Original;
        jogador2.lifePoints = jogador2Original;
    } else if (jogador2.lifePoints <= 0) {
        pVP1 += 1;
        console.log("Jogador 1 ganhou");
        jogador1.lifePoints = jogador1Original;
        jogador2.lifePoints = jogador2Original;
    }
    return {
        jogador1,
        jogador2
    };
}



let dicePlayer1 = rollDice();
let dicePlayer2 = rollDice();

fight(dicePlayer1, dicePlayer2);
victory(jogador1, jogador2);





