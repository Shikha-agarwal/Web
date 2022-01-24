var myAudio ;
var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        if(this.innerHTML == 'w'){
            myAudio = "./sounds/tom-1.mp3";
        } else if(this.innerHTML == 'a'){
            myAudio = "./sounds/tom-2.mp3";
        } else if(this.innerHTML == 's'){
            myAudio = "./sounds/tom-3.mp3";
        }  else if(this.innerHTML == 'd'){
            myAudio = "./sounds/tom-4.mp3";
        }  else if(this.innerHTML == 'j'){
            myAudio = "./sounds/crash.mp3";
        }  else if(this.innerHTML == 'k'){
            myAudio = "./sounds/snare.mp3";
        }  else if(this.innerHTML == 'l'){
            myAudio = "./sounds/kick-bass.mp3";
        } 
        var audio = new Audio(myAudio);
        audio.play();
    });
}
