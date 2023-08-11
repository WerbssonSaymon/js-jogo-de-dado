// Layout do jogo, duas divisões "layout" e um centro "container"
// Area geral do app
let main = document.getElementById("app");
main.setAttribute("style", "display: flex; align-items: center; justify-content: space-between;");

// Area dos layouts
let lay = document.getElementsByClassName("layout");
for (let i = 0; i < lay.length; i++) {
  lay[i].setAttribute("style", "width: 550px; height: 800px; background-color: red;");
}

let person = document.getElementsByClassName("layout__person");
for (let i = 0; i < person.length; i++) {
  person[i].setAttribute("style", " display: flex; flex-direction: column; justify-content: center; align-items: center;");
}

let imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.style.backgroundColor = "green";
    img.style.width = "400px";
    img.style.height = "600px";
    img.style.marginTop = "50px";
}

// Area do container
let obj = document.getElementById("container");
obj.setAttribute("style", "display: flex; align-items: center; justify-content: center; flex-direction: column; margin-top: 150px;");

let divStatus = document.getElementById("container__status");
divStatus.setAttribute("style", " width: 400px; height: 200px; display: flex; flex-direction: row; justify-content: space-between; background-color: blue; margin-bottom: 100px;");

let players = document.getElementsByClassName("container__player");
for (let i = 0; i < players.length; i++) {
  players[i].setAttribute("style", " display: flex; flex-direction: column;");
}

let result = document.getElementById("container__result");
result.setAttribute("style", " width: 350px; display: flex; flex-direction: row; justify-content: space-between;");

let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    span.style.backgroundColor = "green";
    span.style.color = "white";
    span.style.textAlign = "center";
    span.style.padding = "20px";
    span.style.width = "150px";
}

let btn = document.getElementById("btn-dice");
btn.setAttribute("style", "padding: 20px; margin-top: 20px; border-radius: 20px; cursor: pointer;");