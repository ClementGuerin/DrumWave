document.body.addEventListener("keydown", checkKey);
document.body.addEventListener("keyup", resetKey);

/* -- AUDIO -- */

var sound_1 = new Audio('./sounds/1.wav');
var sound_2 = new Audio('./sounds/2.wav');
var sound_3 = new Audio('./sounds/3.wav');
var sound_4 = new Audio('./sounds/4.wav');
var sound_5 = new Audio('./sounds/5.wav');
var sound_6 = new Audio('./sounds/6.wav');
var sound_7 = new Audio('./sounds/7.wav');
var sound_8 = new Audio('./sounds/8.wav');
var sound_9 = new Audio('./sounds/9.wav');

/* ----------- */

function checkKey(){
    
    var Khey = event.keyCode;

    
   // console.log(event.keyCode); // Affiche le keyCode de la touche pressé dans la console
    
        if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105') {
            document.getElementById("grid").classList.add('BOOST');
        }
    
        if (Khey == '97'){
            document.getElementById("number-numpad-1").classList.add('number-numpad-active');
            sound_1.load();
            sound_1.play();
        }
    
        if (Khey == '98'){
            document.getElementById("number-numpad-2").classList.add('number-numpad-active');
            sound_2.load();
            sound_2.play();
        }
    
        if (Khey == '99'){
            document.getElementById("number-numpad-3").classList.add('number-numpad-active');
            sound_3.load();
            sound_3.play();
        }
    
        if (Khey == '100'){
            document.getElementById("number-numpad-4").classList.add('number-numpad-active');
            sound_4.load();
            sound_4.play();
        }
    
        if (Khey == '101'){
            document.getElementById("number-numpad-5").classList.add('number-numpad-active');
            sound_5.load();
            sound_5.play();
        }
    
        if (Khey == '102'){
            document.getElementById("number-numpad-6").classList.add('number-numpad-active');
            sound_6.load();
            sound_6.play();
        }
    
        if (Khey == '103'){
            document.getElementById("number-numpad-7").classList.add('number-numpad-active');
            sound_7.load();
            sound_7.play();
        }
    
        if (Khey == '104'){
            document.getElementById("number-numpad-8").classList.add('number-numpad-active');
            sound_8.load();
            sound_8.play();
        }
    
        if (Khey == '105'){
            document.getElementById("number-numpad-9").classList.add('number-numpad-active');
            sound_9.load();
            sound_9.play();
        }
}

function resetKey(){
    
        var Khey = event.keyCode;
    
        if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105') {
            document.getElementById("grid").classList.remove('BOOST');
        }
    
        if (Khey == '97'){
            document.getElementById("number-numpad-1").classList.remove('number-numpad-active');
        }
    
        if (Khey == '98'){
            document.getElementById("number-numpad-2").classList.remove('number-numpad-active');
        }
    
        if (Khey == '99'){
            document.getElementById("number-numpad-3").classList.remove('number-numpad-active');
        }
    
        if (Khey == '100'){
            document.getElementById("number-numpad-4").classList.remove('number-numpad-active');
        }
    
        if (Khey == '101'){
            document.getElementById("number-numpad-5").classList.remove('number-numpad-active');
        }
    
        if (Khey == '102'){
            document.getElementById("number-numpad-6").classList.remove('number-numpad-active');
        }
    
        if (Khey == '103'){
            document.getElementById("number-numpad-7").classList.remove('number-numpad-active');
        }
    
        if (Khey == '104'){
            document.getElementById("number-numpad-8").classList.remove('number-numpad-active');
        }
    
        if (Khey == '105'){
            document.getElementById("number-numpad-9").classList.remove('number-numpad-active');
        }
}


/** 
        
        Ton code bro :

        document.addEventListener('keydown', function(event){
        var vroom = document.querySelector('.grid');
        vroom.classList.add("BOOST");
        });
        document.addEventListener('keyup', function(event){
        var vroom = document.querySelector('.grid');
        vroom.classList.remove("BOOST");
        }); 
**/