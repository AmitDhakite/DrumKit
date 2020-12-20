for (var i = 0; i < (document.querySelectorAll("button")).length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}
document.addEventListener("keypress", function(event) {makeSound(event.key); buttonAnimation(event.key);});

function makeSound(key) {
  switch (key) {
    case "w":
          var aud = new Audio("sounds/tom-1.mp3");
          aud.play();
      break;
    case "a":
          var aud = new Audio("sounds/tom-2.mp3");
          aud.play();
      break;
    case "s":
          var aud = new Audio("sounds/tom-3.mp3");
          aud.play();
      break;
    case "d":
          var aud = new Audio("sounds/tom-4.mp3");
          aud.play();
      break;
    case "j":
          var aud = new Audio("sounds/crash.mp3");
          aud.play();
      break;
    case "k":
          var aud = new Audio("sounds/kick-bass.mp3");
          aud.play();
      break;
    case "l":
          var aud = new Audio("sounds/snare.mp3");
          aud.play();
      break;
  }
}
function buttonAnimation(b){
  var button = document.querySelector("."+b);
  button.classList.add("pressed");
  setTimeout(function(){button.classList.remove("pressed");}, 100);  
}
