
const m =5;
const n =5;

function createMatrix(m,n,defaulvalue=0);{
    let arr = [];
    for(let j=0; j<m; j++){
        arr.push([]);
        for(let i=0; i<n; i++){
            arr[j].push(defaulvalue);
        }
    }
    return arr;
}

let matrix = createMatrix(5,5,);
/////console.log(matrix)

let v ={
    x:1,
    y:0
};
function changeDirection(vector){
    if(vector.x===1 && vector.y===0){
        vector.x=0;
        vector.y=1;
    }
    else if (vector.x===0 && vector.y===1){
        vertor.x=-1;
        vertor.y=0;
    }
    else if (vector.x===-1 && vector.y===0){
        vector.x==0;
        vector.y==-1;
    }
    else {
        vector.x = 1;
        vector.y = 0;
    }
}
function checkifcollision(current,value,m,n,defaulvalue=-0){
    if(current.x==m || current.y == n){
        return false;
    }
    else {
        if(matrix[current.y][current.x]===defaulvalue){
            return true;
        }
        return false;
    }
}
value = 1;
current = {
    x:0,
    y:0
};
while (value <= m*n){
    if(checkifcollision(current,matrix,m,n)){
        matrix[current.y][current.x]=value;
        value++;
        
    }
    else{
        current.x -= v.x;
        current.y -= v.y;
        changeDirection(v);

    }
    current.x += v.x;
    current.y += v.y;
}

console.log(matrix);