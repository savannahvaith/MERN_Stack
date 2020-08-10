// Th arguments keyword lets you send multiple values

function add(){
    let result = 0; 
    // console.log(arguments); // [arguments] {"0":2, "1":3}
    // console.log(arguments.length); // will return how many elements are stored in the arguments
    let i =0; 
    while(i<arguments.length){
        console.log("->", arguments[i]);
        result = result + arguments[i];
        i++;
    }
    console.log(result); // this will add the argument no matter how many parameters are supplied
}

add(2,3,4);