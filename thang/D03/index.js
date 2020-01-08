function tinhtoan(a, b, bieuthuc) {
    return bieuthuc(a, b);
}

const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;

let kq = tinhtoan(tinhtoan(2, 3, min), 5, min);
console.log(kq);

