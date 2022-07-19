// Type Alisaing
type Combinable = number | string;

function combine2 (input1: Combinable, input2: Combinable) {
    let result;
    if( typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine2(13, 13));
console.log(combine2("13", "13"));