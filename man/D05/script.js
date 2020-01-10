let count_down = document.getElementsByClassName("Clock")[0]
let counter = 0


function startcounting() {
    let startcounting = setInterval(() => {
        count_down.innerHTML = counter;

        console.log(counter)
        if (counter == 20) {
            clearInterval(startcounting)
            counter = 0;
        }
        counter++;
    }, 300)
}