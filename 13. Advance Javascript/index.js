/*
    -------------------------
        Event Listeners
    -------------------------
    @param1 type of event, ex: click
    @param2 listener event, what it will do, usually a function
    addEventListener(param1,param2)
    
    
    -------------------------
            Objects
    -------------------------
    these are created using constructor functions
    Ex:
    function Book(name,price,publisher){
        this.name=name;
        this.price=price
        this.publisher=publisher
    }
    
    -------------------------
        Keyboard mapping
    -------------------------
    this is used to add event listeners to keyboard key presses
    Ex:
    document.addEventListener("keypress",function(event){
        console.log(event);
    });
    
    */
    
numberOfButtons= document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfButtons;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",play);
function play() {
    getButtonValue=this.innerHTML;
    makeSound(getButtonValue);
    buttonAnimation(getButtonValue);
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case 'w':
            var audio= new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            var audio= new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            var audio= new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            var audio= new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            var audio= new Audio("sounds/crash.mp3");
            break;
        case 'k':
            var audio= new Audio("sounds/kick-bass.mp3");
            break;
        case 'l':
            var audio= new Audio("sounds/snare.mp3");
            break;
        default:
            break;
    }
    audio.play();
}


function buttonAnimation(keypressed) {
    var activeButton = document.querySelector("."+keypressed);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 150);
}