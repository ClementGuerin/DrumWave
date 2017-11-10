

function checkKey(){
    
    var Khey = event.keyCode;

    if (Khey == '38') {
        document.getElementById("grid").classList.add('BOOST');
    }
    else{
        document.getElementById("grid").classList.remove('BOOST');
    }
}

document.onkeydown = checkKey;

/** 
        
        Ton code bro, même si déso mais celui du mec de StackOverflow est better

        document.addEventListener('keydown', function(event){
        var vroom = document.querySelector('.grid');
        vroom.classList.add("BOOST");
        });
        document.addEventListener('keyup', function(event){
        var vroom = document.querySelector('.grid');
        vroom.classList.remove("BOOST");
        }); 
**/