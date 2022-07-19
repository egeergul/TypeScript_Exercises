function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is " + num);
}

printResult(add(5, 13));

let combinedValues;
combinedValues = add;
//combinedValues = 5; //this is possible as combinedValues has a type of any...

console.log(combinedValues(8, 8));

let combinedValues2: Function; //This is better but it can take any functionwithout checking return type
combinedValues2 = add;
// combinedValues = 5; this is not possible as combinedValues has a type of Function!
// combinedValues = printResult this is still possible but will result in run-time error ...

console.log(combinedValues2(8, 8));

let combinedValues3: (a: number, b: number ) => number; 
combinedValues3 = add;
// combinedValues = printResult this is not possible because 
// the input and output types of the function is ot same

console.log(combinedValues3(8, 8));


