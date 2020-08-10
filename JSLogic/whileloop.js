let A=1; 
QA:while(A<=10){
    let b=1; 
    A++;
    QAC:while(b<=10){
        b++;
        if(b==5){
            continue QA;
        }
        console.log(b);
    }
    console.log("......",A);
}