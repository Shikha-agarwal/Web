var number1= Math.floor(Math.random() * 6)+1;
var number2= Math.floor(Math.random() * 6)+1;

var randomDice1 = "./images/dice"+ number1 + ".png";
document.querySelector("img").setAttribute("src",randomDice1);

var randomDice2 = "./images/dice"+ number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
 
if(number1>number2){
    document.querySelector("h1").innerHTML = "<em><img class='flag' src='./images/flag.png' alt='flag'> Player1 Wins!</em>";
}
else if(number2>number1){
    document.querySelector("h1").innerHTML = "<em>Player2 Wins! <img class='flag' src='./images/flag.png' alt='flag'></em>";
} else{
    document.querySelector("h1").innerHTML = "<em>draw!</em>";
}
