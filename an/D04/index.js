//Div output
const outputText = document.getElementById('output-text');

//Div input
const inputText = document.getElementById('input-text');
const inputTime = document.getElementById('input-time');

//Button start
const btnStartGame = document.getElementById('btn-start');

const words = [
    'title',
    'events',
    'light',
    'dark',
    'hi',
    'hello',
    'javascript',
    'the',
    'of',
    'to',
    'and',
    'a',
    'in',
    'is',
    'it',
    'you',
    'that',
    'he',
    'was',
    'for',
    'on',
    'are',
    'with',
    'as',
    'his',
    'they',
    'be',
    'at',
    'one',
    'have',
    'this',
    'from',
    'or',
    'had',
    'by',
    'not',
    'word',
    'but',
    'what',
    'some',
    'we',
    'can',
    'out',
    'other',
    'were',
    'all',
    'there',
    'when',
    'up'
]

let valueText = outputText.innerText;
let times = 120;

let countDownTime = () => {
    if(times > 0) {
        inputTime.innerText = `Time: ${times}`;
        times--;
    } else if(times === 0) {
        inputTime.innerText = 'You are lose !';
    }
}

let checkText = () => {
    if(valueText === inputText.value) return true;
    return false;
}

btnStartGame.onclick = () => {
    setInterval(countDownTime, 1000);
    btnStartGame.style.display = 'none';
}

let randomWords = () => {
    let randomWord = () => words[Math.floor(Math.random() * words.length)];
    outputText.innerText = randomWord();
}



let changeColorWord = () => {
    outputText.style.color = 'red';
}

inputText.oninput = () => {
    if(checkText() == true) {
        inputText.value = '';
        setTimeout(changeColorWord, 100);
        setTimeout(randomWords, 2000);
    };
}