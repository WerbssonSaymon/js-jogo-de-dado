let main = document.getElementById("app");
main.setAttribute("style", "display: flex; align-items: center; justify-content: space-between;");

let obj = document.getElementById("container");
obj.setAttribute("style", "display: flex; align-items: center; justify-content: center; flex-direction: column; margin-top: 350px;");

let result = document.getElementById("container__result");
result.setAttribute("style", " width: 150px; display: flex; flex-direction: row; justify-content: space-between;");

let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    span.style.backgroundColor = "green";
    span.style.color = "white";
    span.style.padding = "20px";
}

let lay = document.getElementsByClassName("layout");
for (let i = 0; i < lay.length; i++) {
  lay[i].setAttribute("style", "width: 550px; height: 800px; background-color: red;");
}

let btn = document.getElementById("btn-dice");
btn.setAttribute("style", "padding: 20px; margin-top: 20px; border-radius: 20px;");

