var n = document.querySelectorAll(".drum").length;
var audio = new Map([["w", new Audio("sounds/crash.mp3")], 
               ["a", new Audio("sounds/kick-bass.mp3")],
               ["s", new Audio("sounds/snare.mp3")],
               ["d", new Audio("sounds/tom-1.mp3")],
               ["j", new Audio("sounds/tom-2.mp3")],
               ["k", new Audio("sounds/tom-3.mp3")],
               ["l", new Audio("sounds/tom-4.mp3")]]);

function playSound(key) {
    var sound = audio.get(key);
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
for(var i = 0; i <n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){playSound(this.innerHTML)});
}

document.addEventListener("keypress", function(event){playSound(event.key)});

