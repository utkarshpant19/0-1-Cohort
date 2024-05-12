function arithematic(a,b , operationFn){

    const total = operationFn(a,b); // calls um
    console.log(total);


}

function sum(a, b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

arithematic(10,20, sum);