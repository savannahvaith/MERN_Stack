let add = function(a,b){
    console.log(`The result is ${a}+${b}=${a+b}`);
}
let sub = function(a,b){
    console.log(`The result is ${a}-${b}=${a-b}`);
}

function maths(ref){
    // ref();  // can't be called like this because the function expects two values
    ref(1,2);
}

//can't put brackets inside the parameter because that means we are calling the function - we want to call the reference, which will get called inside maths()
maths(add)
maths(sub);

// Creating a higher order functions with values inputted by the user
function mathsWithValues(ref, value1, value2){
    ref(value1,value2);
}
mathsWithValues(add, 50,4);

