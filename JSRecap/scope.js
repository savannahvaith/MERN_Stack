let a = 20;

if (a > 10) {
    // Scoped to within the if block
    let c = 30;
    console.log("Good");
    console.log(`What is c? ${c}`);
}

// console.log(c); // <- Produces a ReferenceError (out of scope)