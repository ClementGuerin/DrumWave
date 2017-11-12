document.body.addEventListener("keydown", checkKey);
document.body.addEventListener("keyup", resetKey);
document.getElementById("keyboard").addEventListener("click", click);


/* -- AUDIO -- */

// Liste des sons

var sound_1 = new Audio('./sounds/1.wav');
var sound_2 = new Audio('./sounds/2.wav');
var sound_3 = new Audio('./sounds/3.wav');
var sound_4 = new Audio('./sounds/4.wav');
var sound_5 = new Audio('./sounds/5.wav');
var sound_6 = new Audio('./sounds/6.wav');
var sound_7 = new Audio('./sounds/7.wav');
var sound_8 = new Audio('./sounds/8.wav');
var sound_9 = new Audio('./sounds/9.wav');

var soundFormat = '.wav';

/* ----------- */



function checkKey() {

    var Khey = event.keyCode;

    document.getElementById("keyboard-title").innerHTML = "Use your keyboard";
    document.getElementById("keyboard-title").classList.remove('keyboard-title-nrv');

    console.log(event.keyCode); // Affiche le keyCode de la touche pressé dans la console


    // Keys

    if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105' || Khey == '49' || Khey == '50' || Khey == '51' || Khey == '52' || Khey == '53' || Khey == '54' || Khey == '55' || Khey == '56' || Khey == '57') {
        document.getElementById("grid").classList.add('grid-active');
    }

    if (Khey == '97' || Khey == '49') {
        var keyID = '1';
        keyActive();
        launchSound();
    }

    if (Khey == '98' || Khey == '50') {
        var keyID = '2';
        keyActive();
        launchSound();
    }

    if (Khey == '99' || Khey == '51') {
        var keyID = '3';
        keyActive();
        launchSound();
    }

    if (Khey == '100' || Khey == '52') {
        var keyID = '4';
        keyActive();
        launchSound();
    }

    if (Khey == '101' || Khey == '53') {
        var keyID = '5';
        keyActive();
        launchSound();
    }

    if (Khey == '102' || Khey == '54') {
        var keyID = '6';
        keyActive();
        launchSound();
    }

    if (Khey == '103' || Khey == '55') {
        var keyID = '7';
        keyActive();
        launchSound();
    }

    if (Khey == '104' || Khey == '56') {
        var keyID = '8';
        keyActive();
        launchSound();
    }

    if (Khey == '105' || Khey == '57') {
        var keyID = '9';
        keyActive();
        launchSound();
    }

    if (Khey == '65') {
        var keyID = 'a';
        keyActive();
        launchSound();
    }
    if (Khey == '90') {
        var keyID = 'z';
        keyActive();
        launchSound();
    }
    if (Khey == '69') {
        var keyID = 'e';
        keyActive();
        launchSound();
    }
    if (Khey == '82') {
        var keyID = 'r';
        keyActive();
        launchSound();
    }
    if (Khey == '84') {
        var keyID = 't';
        keyActive();
        launchSound();
    }
    if (Khey == '89') {
        var keyID = 'y';
        keyActive();
        launchSound();
    }
    if (Khey == '85') {
        var keyID = 'u';
        keyActive();
        launchSound();
    }
    if (Khey == '73') {
        var keyID = 'i';
        keyActive();
        launchSound();
    }
    if (Khey == '79') {
        var keyID = 'o';
        keyActive();
        launchSound();
    }
    if (Khey == '80') {
        var keyID = 'p';
        keyActive();
        launchSound();
    }
    if (Khey == '81') {
        var keyID = 'q';
        keyActive();
        launchSound();
    }
    if (Khey == '83') {
        var keyID = 's';
        keyActive();
        launchSound();
    }
    if (Khey == '68') {
        var keyID = 'd';
        keyActive();
        launchSound();
    }
    if (Khey == '70') {
        var keyID = 'f';
        keyActive();
        launchSound();
    }
    if (Khey == '71') {
        var keyID = 'g';
        keyActive();
        launchSound();
    }
    if (Khey == '72') {
        var keyID = 'h';
        keyActive();
        launchSound();
    }
    if (Khey == '74') {
        var keyID = 'j';
        keyActive();
        launchSound();
    }
    if (Khey == '75') {
        var keyID = 'k';
        keyActive();
        launchSound();
    }
    if (Khey == '76') {
        var keyID = 'l';
        keyActive();
        launchSound();
    }
    if (Khey == '77') {
        var keyID = 'm';
        keyActive();
        launchSound();
    }
    if (Khey == '87') {
        var keyID = 'w';
        keyActive();
        launchSound();
    }
    if (Khey == '88') {
        var keyID = 'x';
        keyActive();
        launchSound();
    }
    if (Khey == '67') {
        var keyID = 'c';
        keyActive();
        launchSound();
    }
    if (Khey == '86') {
        var keyID = 'v';
        keyActive();
        launchSound();
    }
    if (Khey == '66') {
        var keyID = 'b';
        keyActive();
        launchSound();
    }
    if (Khey == '78') {
        var keyID = 'n';
        keyActive();
        launchSound();
    }


    // Fonction qui allume la touche
    function keyActive() {
        document.getElementById('key-' + keyID).classList.add('key-active');
    }

    // Fonction qui balance le gros on's sa mère
    function launchSound() {
        var soundID = new Audio('./sounds/' + keyID + soundFormat);
        soundID.load();
        soundID.play();
    }
}


function resetKey() {

    var Khey = event.keyCode;

    //  Keys

    if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105' || Khey == '49' || Khey == '50' || Khey == '51' || Khey == '52' || Khey == '53' || Khey == '54' || Khey == '55' || Khey == '56' || Khey == '57') {
        document.getElementById("grid").classList.remove('grid-active');
    }

    if (Khey == '97' || Khey == '49') {
        var keyID = '1';
        keyOff();
    }

    if (Khey == '98' || Khey == '50') {
        var keyID = '2';
        keyOff();
    }

    if (Khey == '99' || Khey == '51') {
        var keyID = '3';
        keyOff();
    }

    if (Khey == '100' || Khey == '52') {
        var keyID = '4';
        keyOff();
    }

    if (Khey == '101' || Khey == '53') {
        var keyID = '5';
        keyOff();
    }

    if (Khey == '102' || Khey == '54') {
        var keyID = '6';
        keyOff();
    }

    if (Khey == '103' || Khey == '55') {
        var keyID = '7';
        keyOff();
    }

    if (Khey == '104' || Khey == '56') {
        var keyID = '8';
        keyOff();
    }

    if (Khey == '105' || Khey == '57') {
        var keyID = '9';
        keyOff();
    }
    if (Khey == '65') {
        var keyID = 'a';
        keyOff();
    }
    if (Khey == '90') {
        var keyID = 'z';
        keyOff();
    }
    if (Khey == '69') {
        var keyID = 'e';
        keyOff();
    }
    if (Khey == '82') {
        var keyID = 'r';
        keyOff();
    }
    if (Khey == '84') {
        var keyID = 't';
        keyOff();
    }
    if (Khey == '89') {
        var keyID = 'y';
        keyOff();
    }
    if (Khey == '85') {
        var keyID = 'u';
        keyOff();
    }
    if (Khey == '73') {
        var keyID = 'i';
        keyOff();
    }
    if (Khey == '79') {
        var keyID = 'o';
        keyOff();
    }
    if (Khey == '80') {
        var keyID = 'p';
        keyOff();
    }
    if (Khey == '81') {
        var keyID = 'q';
        keyOff();
    }
    if (Khey == '83') {
        var keyID = 's';
        keyOff();
    }
    if (Khey == '68') {
        var keyID = 'd';
        keyOff();
    }
    if (Khey == '70') {
        var keyID = 'f';
        keyOff();
    }
    if (Khey == '71') {
        var keyID = 'g';
        keyOff();
    }
    if (Khey == '72') {
        var keyID = 'h';
        keyOff();
    }
    if (Khey == '74') {
        var keyID = 'j';
        keyOff();
    }
    if (Khey == '75') {
        var keyID = 'k';
        keyOff();
    }
    if (Khey == '76') {
        var keyID = 'l';
        keyOff();
    }
    if (Khey == '77') {
        var keyID = 'm';
        keyOff();
    }
    if (Khey == '87') {
        var keyID = 'w';
        keyOff();
    }
    if (Khey == '88') {
        var keyID = 'x';
        keyOff();
    }
    if (Khey == '67') {
        var keyID = 'c';
        keyOff();
    }
    if (Khey == '86') {
        var keyID = 'v';
        keyOff();
    }
    if (Khey == '66') {
        var keyID = 'b';
        keyOff();
    }
    if (Khey == '78') {
        var keyID = 'n';
        keyOff();
    }

    // Fonction qui éteint la touche
    function keyOff() {
        document.getElementById('key-' + keyID).classList.remove('key-active');
    }
}

function click() {
    document.getElementById("keyboard-title").innerHTML = "Use ur fucking Keyboard OMG!!!";
    document.getElementById("keyboard-title").classList.add('keyboard-title-nrv');
}