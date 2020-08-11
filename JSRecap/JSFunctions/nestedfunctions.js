function operation(){
    // nested function
    let f = function(){
        console.log("hello ");
        console.log("my ");
        console.log("friends");
    }
    return f; 
    
}
let func = operation(); 
func(); 