function maths(opt,no1,no2){
    // let result = 0; 
    // if(opt === "add"){
    //     result = no1 + no2;
    //     console.log("The result of addition is: ", result);
    // }
    // if(opt === "sub"){
    //     result = no1 - no2;
    //     console.log("The result of subtraction is: ", result);
    // }

    //enhanced version
    let result = 0;
    switch(opt){
        case "add":
            result = no1+no2;
            console.log(`The result of addition is: ${result}`);
            break;
        case "sub":
            result = no1 - no2;
            console.log(`The result of subtraction is: ${result}`);
            break;
    }
}

maths("add", 2,3);
maths("sub", 20,3);