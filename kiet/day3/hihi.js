let array = [];
let isPrime = n => {
    for ( let i = 2;i<n;i++){
        array[i] = true;
    }
    for (let i = 2;i*i<n;i++){
        if (array[i] === true)
            for (let j = i*i; j < n;j= j +i){
                array[j] = false;
            }
    }

    for(let i = 2 ; i<n ;i++){
        if (array[i]===true){
            console.log(i);
        }
        
    }
}
// isPrime(50);
console.log(isPrime(50));
