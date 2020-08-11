// Functions do not have a name, but the function is stored in a reference variable 
let add = function(a,b){
    console.log(`The result is ${a}+${b}=${a+b}`);
}
let sub = function(a,b){
    console.log(`The result is ${a}-${b}=${a-b}`);
}

add(2,3);
sub(30,10);

// Passing a function to a function 

let msg = function(){
    console.log("Hello my friends");
}

function doSomething(F){
    F(); 
}

doSomething(msg);

// Another example:
let QA = function(){
    for(let a =1; a<=10; a++){
        console.log(a); 
    }
}

doSomething(QA);