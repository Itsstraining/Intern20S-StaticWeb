/*let printFibonacci = n => {
    let a = 1;
    let b = 1;
    console.log(1);
    console.log(1);
    for (let i = 2; i < n; i += 2) {
        a = a + b;
        console.log(a);
        if (i < n - 1) {
            b = a + b;
            console.log(b);
        }
    }
}

console.log(printFibonacci(6));
*/
let printfPrime = n => {
    
    for (let i = 2; i < n; i++) {
       
        for(let j = 2; j <= i; j++)
        {
            
            if(i % j == 0 && i != 2)
            {
                break; 
            }
            
            if(j==i-1 || i == 2)
            {
                console.log(i)
            }
        }
    }
    
}


let arr = n => {
    let arrtemp = [];
    
    for (let i = 0; i < n; i++)
    {
        arrtemp[i] = 1;
    }
    return arrtemp;
}


let printfPrimeEratosthenes = (n) =>{
    
    let arrtemp = arr(n);
    
    for (let i=2;i<n;i++){
        if(arrtemp[i] == 1)
        {
            for (let j = i*i; j < n; j = j+i)
            {
               arrtemp[j] = 0; 
            }
        }
    }

    for (let i = 2; i < n; i++)
    {
        if(arrtemp[i] == 1)
        {
            console.log(i);
        }
    }

}
printfPrimeEratosthenes(30);
