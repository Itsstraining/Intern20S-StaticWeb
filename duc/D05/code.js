
function gennerateKeys() {
    let genkeys = document.getElementsByClassName("keyboard")
    var keyboard = "qwertyuiopasdfghjklzxcvbnm";
    keyboard = keyboard.split("")
    for (let i = 0; i < keyboard.length; i++) {
        let generatekey = document.createElement("div");
        let stepdown = document.createElement("br");
        generatekey.textContent = keyboard[i];
        if (i === 10 || i === 19) {
            genkeys[0].appendChild(stepdown)
        }
        genkeys[0].appendChild(generatekey);
    }
}
gennerateKeys()


let button1 = document.getElementById("bt1").value
let wordlist = []

for (let i = 0; i < button1.length; i++) {
    wordlist.push(button1[i]);

}
console.log(wordlist)

let userinput = document.getElementById('press')
userinput.addEventListener("keydown", check);

function check(e) {
    console.log(e)
    for (let i = 0; i < wordlist.length; i++) {
        if (e == wordlist[i]) {
            console.log()
            let colors = document.getElementById("bt1")
            colors.style.color = 'pink'

            wordlist.shift();
        }
    }
}


check()



let div = document.getElementsByClassName("text-top");


button1.onclick = function () {
    button1.value = 'Y o u o n l y l i v e o n c e  b u t i f y o u d o i t r i g h t';

}









