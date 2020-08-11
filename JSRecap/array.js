let arrFunction = []; 

arrFunction.push(function(){
    console.log("Hi");
});
arrFunction.push(function(){
    for(let a =1;a<10;a++){
        console.log(a);
    }
});

arrFunction.forEach(function(value){
    value()
});

