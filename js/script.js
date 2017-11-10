

function checkKey(){
    
    var Khey = event.keyCode;

    if (Khey == '38') {
        document.getElementById("grid").classList.add('BOOST');
        console.log('Ish ish');
    }
}

document.onkeydown = checkKey;