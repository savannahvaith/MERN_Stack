// A labelled block 
foo: {
    console.log("Foo");
    break foo; 
    console.log("Not executed"); // Unreachable code
}