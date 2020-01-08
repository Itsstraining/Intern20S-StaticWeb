const m = 5;
const n = 5;

// cos(pi/2) and sine(pi/2)
const cosx = 0;
const sinex = 1;

function createMatrix(m, n, defaultValue = 0) {
    let arr = [];
    for (let j = 0; j < m; j++) {
        arr.push([]);
        for (let i = 0; i < n; i++) {
            arr[j].push(defaultValue);
        }
    }
    return arr;
}

function changeDirection(vector) {

    // Vector Rotation PI/2
    const {
        x,
        y
    } = v;
    vector.x = x * cosx - y * sinex;
    vector.y = x * sinex + y * cosx;


}

function checkIfCollision(current, matrix, m, n, defaultValue = 0) {
    if (current.y == m || current.x == n) {
        return false;
    } else {
        if (matrix[current.y][current.x] === defaultValue) {
            return true;
        }
        return false;
    }
}

function forward(current, v) {
    current.x += v.x;
    current.y += v.y;
}

function backward(current, v) {
    current.x -= v.x;
    current.y -= v.y;
}

let matrix = createMatrix(m, n);
let v = {
    x: 1,
    y: 0
};
value = 1;
current = {
    x: 0,
    y: 0
};

while (value <= m * n) {
    if (checkIfCollision(current, matrix, m, n)) {
        matrix[current.y][current.x] = value;
        value++;
    } else {
        backward(current, v);
        changeDirection(v);

    }
    forward(current, v);
}

console.log(matrix);