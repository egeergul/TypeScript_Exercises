function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is " + num);
}
printResult(add(5, 13));
var combinedValues;
combinedValues = add;
//combinedValues = 5; //this is possible as combinedValues has a type of any...
console.log(combinedValues(8, 8));
var combinedValues2; //This is better but it can take any functionwithout checking return type
combinedValues2 = add;
// combinedValues = 5; this is not possible as combinedValues has a type of Function!
// combinedValues = printResult this is still possible but will result in run-time error ...
console.log(combinedValues2(8, 8));
var combinedValues3;
combinedValues3 = add;
// combinedValues = printResult this is not possible!
console.log(combinedValues3(8, 8));
