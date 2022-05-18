var ranNum1, ranNum2;

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var imgsrc = "./images/dice";
var msgEl = document.querySelector("h1");

function randomNum(max, min) {
  var randomNum = Math.floor(Math.random() * (max - min) + min);
  //random number = math.random()*(max-min)+min;
  return randomNum;
}

function roll() {
  ranNum1 = randomNum(1, 6);
  ranNum2 = randomNum(1, 6);
  console.log(`${ranNum1} ${ranNum2}`);
  img1.setAttribute("src", `${imgsrc}${ranNum1}.png`);
  img2.setAttribute("src", `${imgsrc}${ranNum2}.png`);
  if (ranNum1 > ranNum2) {
    msgEl.innerHTML = "Player1 Wins";
  } else if (ranNum1 < ranNum2) {
    msgEl.innerHTML = "Player2 wins";
  } else msgEl.innerHTML = "Draw !";
}

document.querySelector("h1").innerHTML = "Winners??wins";

console.log(`${ranNum1} ${ranNum2}`);
