function runAfter1s(helper: (a: number, b:number)=> number){

    setTimeout(helper, 1000);
}

function add(a: number, b: number){
    return a+b;
};

runAfter1s(add);