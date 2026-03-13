let tokens = ["Q", "W", "E", "R", "T", "R", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?"];
let amount = 4;
let password = "";

function increase(){
    let kvant = document.getElementById("kvant");
    if(amount < 20){
        amount++;
        kvant.innerHTML = "Amount of letters: " + amount;
    }
}
function decrease(){
    let kvant = document.getElementById("kvant");
    if(amount > 4){
        amount--;
        kvant.innerHTML = "Amount of letters: " + amount;
    }
}

function randomize(){
    let pass = document.getElementById("pass");
    password = "";
    for(let i=0; i < amount; i++){
        let num = Math.floor(Math.random()*tokens.length);
        password += tokens[num];
        pass.innerHTML = password;
    }
}