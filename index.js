
var list = document.querySelectorAll(".drum");
document.addEventListener("keypress",function(event){
    switch(event.key){
        case 'w': var audio = new Audio('sounds/tom-1.mp3');
        audio.play(); break;
        case 'a': var audio = new Audio('sounds/tom-2.mp3');
        audio.play(); break;
        case 's': var audio = new Audio('sounds/tom-3.mp3');
        audio.play(); break;
        case 'd': var audio = new Audio('sounds/tom-4.mp3');
        audio.play(); break;
        case 'j': var audio = new Audio('sounds/snare.mp3');
        audio.play(); break;
        case 'k': var audio = new Audio('sounds/crash.mp3');
        audio.play(); break;
        case 'l': var audio = new Audio('sounds/kick-bass.mp3');
        audio.play(); break;
    }
    makeAnimation(event.key);
});
var i;
for(i=0;i<list.length;i++){
    switch(i){
        case 0 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/tom-1.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 1 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/tom-2.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 2 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/tom-3.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 3 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/tom-4.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 4 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/snare.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 5 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/crash.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        case 6 : list[i].addEventListener("click",function(){var audio = new Audio('sounds/kick-bass.mp3');
        audio.play(); makeAnimation(this.innerHTML);}); break;
        default: break;
    }
    
    
}
function makeAnimation(key){
    var acButton= document.querySelector("."+key);
    acButton.classList.add('pressed');
    setTimeout(function(){acButton.classList.remove('pressed');},100);
    

}