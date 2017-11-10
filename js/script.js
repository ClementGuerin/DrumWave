document.body.addEventListener("keydown", checkKey);
document.body.addEventListener("keyup", resetKey);

function checkKey(){
    
    var Khey = event.keyCode;

    
   // console.log(event.keyCode); // Affiche le keyCode de la touche pressé dans la console
    
        if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105') {
            document.getElementById("grid").classList.add('BOOST');
        }
    
        if (Khey == '97'){
            document.getElementById("number-numpad-1").classList.add('number-numpad-active');
        }
    
        if (Khey == '98'){
            document.getElementById("number-numpad-2").classList.add('number-numpad-active');
        }
    
        if (Khey == '99'){
            document.getElementById("number-numpad-3").classList.add('number-numpad-active');
        }
    
        if (Khey == '100'){
            document.getElementById("number-numpad-4").classList.add('number-numpad-active');
        }
    
        if (Khey == '101'){
            document.getElementById("number-numpad-5").classList.add('number-numpad-active');
        }
    
        if (Khey == '102'){
            document.getElementById("number-numpad-6").classList.add('number-numpad-active');
        }
    
        if (Khey == '103'){
            document.getElementById("number-numpad-7").classList.add('number-numpad-active');
        }
    
        if (Khey == '104'){
            document.getElementById("number-numpad-8").classList.add('number-numpad-active');
        }
    
        if (Khey == '105'){
            document.getElementById("number-numpad-9").classList.add('number-numpad-active');
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