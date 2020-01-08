const m = 5;
const n = 5;

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

let matrix = createMatrix(m, n);

let v = {
    x: 1,
    y: 0
};

function changeDirection(vector) {
    // R -> U
    if (vector.x === 1 && vector.y === 0) {
        vector.x = 0;
        vector.y = 1;
    } else if (vector.x === 0 && vector.y === 1) {
        vector.x = -1;
        vector.y = 0;
    } else if (vector.x === -1 && vector.y === 0) {
        vector.x = 0;
        vector.y = -1;
    } else {
        vector.x = 1;
        vector.y = 0;
    }
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
        current.x -= v.x;
        current.y -= v.y;
        changeDirection(v);

    }
    current.x += v.x;
    current.y += v.y;
}

console.log(matrix);