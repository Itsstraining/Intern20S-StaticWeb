const input = document.getElementById('input');
const btn = document.getElementById('btn');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

btn.onclick = function() {
    let inputValue = input.value;
    if(inputValue) {
        arr.push(inputValue);
    }
    input.value = "";
}

let fill_maxtrix = function(arr, rows, cols) {
    let newArr = [];
    let count = 0;
    for(let i = 0; i < rows; i++) {
        newArr.push([]);
    }

    //Go to right
    for(let j = 0; j < cols; j++) {
        newArr[0][j] = arr[count];
        count++;
    }

    //Go to down
    for(let i = 1; i < rows; i++) {
        newArr[i][cols - 1] = arr[count];
        count++;
        
        //Go to left
        if(i === rows-1) {
            for(let j = cols-2; j >= 0; j--) {
                newArr[i][j] = arr[count];
                count++;
            }
        }
    }

    //Go to up
    for(let i = rows-2; i > 0; i--) {
        newArr[i][0] = arr[count];

        //Go to right
        if(i === 1) {
            for(let j = 0; j < cols-1; j++) {
                newArr[i][j] = arr[count];
                count++;
            }
        }
        count++;
    }

    //Go to down
    count--;
    for(let j = cols-2; j > 0; j--) {
        newArr[rows-2][j] = arr[count];
        count++;
    }

    return newArr;
}

console.log(fill_maxtrix(arr, 4, 5));