

function greet(){
    console.log('Hello world');
}

setTimeout(()=>{
    const now = Date.now();
    greet();
}, 1000);