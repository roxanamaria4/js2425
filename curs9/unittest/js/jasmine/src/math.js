function helloWorld(){
    return "Hello World";
}
function sum(a,b){
    a = a * 100;
    b = b * 100;
    let sum = a + b;
    sum = sum /100
    return Number(sum.toFixed(2));
}