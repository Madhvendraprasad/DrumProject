var buttons=document.querySelectorAll(".drum").length;
var i;
for(i=0;i<buttons;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonname=this.textContent;
            makesound(buttonname);
            animation(buttonname);
   });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
 });

function makesound(key){

  switch (key) {
    case "w":
    var audiocrash=new Audio("sounds/crash.mp3");
      audiocrash.play();
      break;
    case "a":
      var audio2=new Audio("sounds/kick-bass.mp3");
        audio2.play();
        break;
    case "s":
          var audio3=new Audio("sounds/snare.mp3");
            audio3.play();
            break;
      case "d":
          var audio4=new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
      case "j":
              var audio5=new Audio("sounds/tom-2.mp3");
                    audio5.play();
                    break;
        case "k":
            var audio6=new Audio("sounds/tom-3.mp3");
            audio6.play();
              break;
        case "l":
            var audio7=new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
      }

}

function animation(key){
  var activekey = document.querySelector("."+key);
activekey.classList.add("pressed");
setTimeout( function(){
  activekey.classList.remove("pressed");
}
  , 100);
}
