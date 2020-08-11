// find the 1st , 2nd and 3rd highest numbers

function maxthree() {
    let first = 0;
    let second = 0;
    let third = 0;
    let i = 0;
    while (i < arguments.length) {
        if (arguments[i] > first) {
            third = second;
            second = first;
            first = arguments[i];
        } else if (arguments[i] > second && arguments[i] < first) {
            third = second;
            second = arguments[i];
        } else if (arguments[i] > third && arguments[i] < second) {
            third = arguments[i];
        }
        i++
    }
    console.log(" Highest:", first);
    console.log(" Second:", second);
    console.log(" Third:", third);



}
maxthree(12, 12, 2, 5, 156, 172, 172, 9, 0, 98, 8, 7, 77, 190080)

