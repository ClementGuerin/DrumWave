document.body.addEventListener("keydown", checkKey);
document.body.addEventListener("keyup", resetKey);

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



function checkKey(){
    
    var Khey = event.keyCode;

    
    console.log(event.keyCode); // Affiche le keyCode de la touche pressé dans la console
    
        
        // Numpad Keys    
    
        if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105') {
            document.getElementById("grid").classList.add('grid-active');
        }
    
        // No-Numpad Keys
    
        if (Khey == '49' || Khey == '50' || Khey == '51' || Khey == '52' || Khey == '53' || Khey == '54' || Khey == '55' || Khey == '56' || Khey == '57') {
            document.getElementById("grid").classList.add('grid-active');
        }
    
        if (Khey == '97' || Khey == '49'){
            var keyID = '1';
            keyActive();
            launchSound();
        }
    
        if (Khey == '98' || Khey == '50'){
            var keyID = '2';
            keyActive();
            launchSound();
        }
    
        if (Khey == '99' || Khey == '51'){
            var keyID = '3';
            keyActive();
            launchSound();
        }
    
        if (Khey == '100' || Khey == '52'){
            var keyID = '4';
            keyActive();
            launchSound();
        }
    
        if (Khey == '101' || Khey == '53'){
            var keyID = '5';
            keyActive();
            launchSound();
        }
    
        if (Khey == '102' || Khey == '54'){
            var keyID = '6';
            keyActive();
            launchSound();
        }
    
        if (Khey == '103' || Khey == '55'){
            var keyID = '7';
            keyActive();
            launchSound();
        }
    
        if (Khey == '104' || Khey == '56'){
            var keyID = '8';
            keyActive();
            launchSound();
        }
    
        if (Khey == '105' || Khey == '57'){
            var keyID = '9';
            keyActive();
            launchSound();
        }
    
    // Fonction qui allume la touche
        function keyActive(){
            document.getElementById('key-'+keyID).classList.add('key-active');
        }
    
    // Fonction qui balance le gros on's sa mère
        function launchSound(){
            var soundID = new Audio('./sounds/'+keyID+soundFormat);
            soundID.load();
            soundID.play();
        }
}
    

function resetKey(){
    
        var Khey = event.keyCode;
    
        // Numpad Keys
    
        if (Khey == '97' || Khey == '98' || Khey == '99' || Khey == '100' || Khey == '101' || Khey == '102' || Khey == '103' || Khey == '104' || Khey == '105') {
            document.getElementById("grid").classList.remove('grid-active');
        }
    
        // No-Numpad Keys
    
        if (Khey == '49' || Khey == '50' || Khey == '51' || Khey == '52' || Khey == '53' || Khey == '54' || Khey == '55' || Khey == '56' || Khey == '57') {
            document.getElementById("grid").classList.remove('grid-active');
        }
    
        if (Khey == '97' || Khey == '49'){
            var keyID = '1';
            keyOff();
        }
    
        if (Khey == '98' || Khey == '50'){
            var keyID = '2';
            keyOff();
        }
    
        if (Khey == '99' || Khey == '51'){
            var keyID = '3';
            keyOff();
        }
    
        if (Khey == '100' || Khey == '52'){
            var keyID = '4';
            keyOff();
        }
    
        if (Khey == '101' || Khey == '53'){
            var keyID = '5';
            keyOff();
        }
    
        if (Khey == '102' || Khey == '54'){
            var keyID = '6';
            keyOff();
        }
    
        if (Khey == '103' || Khey == '55'){
            var keyID = '7';
            keyOff();
        }
    
        if (Khey == '104' || Khey == '56'){
            var keyID = '8';
            keyOff();
        }
    
        if (Khey == '105' || Khey == '57'){
            var keyID = '9';
            keyOff();
        }
    
        // Fonction qui éteint la touche
            function keyOff(){
                document.getElementById('key-'+keyID).classList.remove('key-active');
            }
}