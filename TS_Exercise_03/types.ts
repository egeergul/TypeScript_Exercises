console.log("Experiment with types!");

function add (number1: number, number2: number, printResult: boolean, phrase: string) {
    console.log(typeof number1);
    if(printResult === true) {
        console.log(phrase + number1 + number2); // although number1 and number2 are both type of number
        // when a string type of variable is introduce, they are interpreted as strings and concatted as well

        // to avoid that...
        const result = number1 + number2
        console.log(phrase + result);

    } else {
        return number1 + number2;
    }
    
}

let n1 : number;
n1 = 5;
const n2 = 4.5; //const n2 = '4.5'; yields an error
let phrase = "The result is ";
//phrase = 0; this yields an error as phrase was initially assigned a string and one cannot change its type

add(n1, n2, true, phrase);

