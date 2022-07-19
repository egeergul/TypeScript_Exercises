console.log("Unknown type");

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ege";

// this if statement is necessary for unkown type
if (typeof userInput === "string") userName = userInput;

// you can directly assign type of any to a string
let userInput2: any;
userInput2 = 5;
userInput2 = "Ege";

userName = userInput2;
