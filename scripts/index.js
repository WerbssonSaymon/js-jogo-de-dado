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

let pVP1 = 0;
let pVP2 = 0;

let amountRoll = 1;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
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

let jogador1Original, jogador2Original;

const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");
const rollDiceButton = document.getElementById("btn-dice");

const playerOne__name = document.getElementById("playerOne__name");
const playerTwo__name = document.getElementById("playerTwo__name");
const playerOne__lifePoints = document.getElementById("playerOne__lifePoints");
const playerTwo__lifePoints = document.getElementById("playerTwo__lifePoints");

const pvp1View = document.getElementById("pvOne");
const pvp2View = document.getElementById("pvTwo");

const player1CharacterSelect = document.getElementById("player1-character");
const player2CharacterSelect = document.getElementById("player2-character");

rollDiceButton.addEventListener("click", function() {
    for (let i = 0; i < amountRoll; i++) {
        // Capturar as seleções do usuário
        const selectedCharacter1 = player1CharacterSelect.value;
        const selectedCharacter2 = player2CharacterSelect.value;

        // Atribuir os personagens selecionados aos jogadores 1 e 2
        let jogador1, jogador2;

        switch (selectedCharacter1) {
            case "goblin":
                jogador1 = goblin;
                jogador1Original = goblin.lifePoints;
                break;
            case "kobold":
                jogador1 = kobold;
                jogador1Original = kobold.lifePoints;
                break;
            case "orc":
                jogador1 = orc;
                jogador1Original = orc.lifePoints;
                break;
        }

        switch (selectedCharacter2) {
            case "goblin":
                jogador2 = goblin;
                jogador2Original = goblin.lifePoints;
                break;
            case "kobold":
                jogador2 = kobold;
                jogador2Original = kobold.lifePoints;
                break;
            case "orc":
                jogador2 = orc;
                jogador2Original = orc.lifePoints;
                break;
        }

        // jogador1Original = { ...jogador1 };
        // jogador2Original = { ...jogador2 };

        let roll1 = rollDice();
        let roll2 = rollDice();

        jogador1.attack = roll1;
        jogador2.attack = roll2;

        resultOne.textContent = `ROLOU: ${roll1} `;
        resultTwo.textContent = `ROLOU: ${roll2} `;

        let resultFight = fight(jogador1, jogador2);

        jogador1 = resultFight.jogador1;
        jogador2 = resultFight.jogador2;

        playerOne__name.textContent = `${jogador1.name}`;
        playerTwo__name.textContent = `${jogador2.name}`;

        playerOne__lifePoints.textContent = `${jogador1.lifePoints}`;
        playerTwo__lifePoints.textContent = `${jogador2.lifePoints}`;

        pvp1View.textContent = `VITÓRIAS: ${pVP1}`;
        pvp2View.textContent = `VITÓRIAS: ${pVP2}`;

        console.log(jogador1.lifePoints);
        console.log(jogador2.lifePoints);

        victory(jogador1, jogador2);
    }
});