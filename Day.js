const { useCallback } = require("react");

// Callback function
function hello(n1,n2){
    console.log("task1");
    setTimeout(function(){
        console.log("task2");
        console.log("task3");
    })
    
    return n1+n2;
}

function hi(){
    console.log("task4");
}

let a = 10;
let b = 20;
// console.log(hello(a,b),hi());

function f(){
    console.log("function in FSD");
}

function g(){
    Callback("let's learn FSD");
}

f(g());