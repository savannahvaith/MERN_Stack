function findHighest(){
    let i = 0; 
    let highest = 0; 
    while(i<arguments.length){
        if(arguments[i] > highest){
            highest = arguments[i];
        }
        i++;
    }
    console.log(highest);
}

findHighest(1,22,3,55);

