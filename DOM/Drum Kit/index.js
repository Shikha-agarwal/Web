var myAudio;

//for button click
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    sound(this.innerHTML);
    animateButton(this.innerHTML);
  });
}

//for keyword key click
document.addEventListener("keydown", function (event) {
  sound(event.key);
  animateButton(event.key);
});

function sound(buttonPressed) {
  switch (buttonPressed) {
    case "w":
      myAudio = "./sounds/tom-1.mp3";
      break;
    case "a":
      myAudio = "./sounds/tom-2.mp3";
      break;
    case "s":
      myAudio = "./sounds/tom-3.mp3";
      break;
    case "d":
      myAudio = "./sounds/tom-4.mp3";
      break;
    case "j":
      myAudio = "./sounds/crash.mp3";
      break;
    case "k":
      myAudio = "./sounds/snare.mp3";
      break;
    case "l":
      myAudio = "./sounds/kick-bass.mp3";
      break;
    default: myAudio = "no";
      console.log(buttonPressed);
  }
  var audio = new Audio(myAudio);
  audio.play();
}

function animateButton(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },500);
}
