const timer = document.getElementById("timer");
const textView = document.getElementById("textView");
const textArea = document.getElementById("textArea");
const scoreView = document.getElementById("score");
const container = document.getElementById("container");

let score = 0;
let time = 60;
let flag = false;

function randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function setTimer() {
    if (time > 0) {
        timer.innerHTML = `Time: ${time}`
        time--;
    } else {
        if (time == 0) {
            timer.innerHTML = "GAME OVER";
            textArea.disabled = true;
        }
    }
}


let rand = randomString();
textView.value = rand;
textArea.onkeyup = handle;


function handle(e) {
    let eCode = e.code.substr(e.code.length - 1, e.code.length).toLowerCase();
    let temp = rand.charAt(0);
    if (eCode == temp) {
        score++;
        scoreView.innerHTML = `Score: ${score}`;
        rand = rand.substr(1, rand.length);
        textView.value = rand;
        if (rand.length == 0) {
            rand = randomString();
            textView.value = rand;
        }
    }else {
        let temptemp = (String)(textArea.value);
        temptemp = temptemp.substr(0, temptemp.length - 1);
        textArea.value = temptemp;
    }
}

document.onkeypress = () => {
    if(!flag){
        setInterval(setTimer, 1000);
        flag = true;
    }
}







