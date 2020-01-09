let array = [];
let songuyento = Number => {
    for (let i = 2; i < Number; i++) {
        array[i] = true;
    }
    for (let i = 2; i * i < Number; i++) {
        if (array[i] === true)
            for (let j = i * i; j < Number; j = j + i) {
                array[j] = false;
            }
    }

    for (let i = 2; i < Number; i++) {
        if (array[i] === true) {
            console.log(i);
        }
    }
}
console.log(songuyento(40));