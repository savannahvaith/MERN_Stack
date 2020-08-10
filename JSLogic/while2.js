let a = 1;

while (a <= 10) {
    a++;

    if (a == 5) {
        continue; // Skips the current iteration
    } else if (a == 11) {
        break; // breaks out of the loop
    }

    console.log(a);
}