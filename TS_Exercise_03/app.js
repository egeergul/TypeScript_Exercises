var person = {
    name: "Ege",
    age: 21
};
//console.log(person.nickname); yields an error as nickname doesn't exist
//console.log(person.name);  this yields an error for person after adding the type of object
// one must use the following syntax
var JOB;
(function (JOB) {
    JOB[JOB["EMPLOYER"] = 0] = "EMPLOYER";
    JOB[JOB["EMPLOYEE"] = 1] = "EMPLOYEE";
    JOB[JOB["STAFF"] = 2] = "STAFF";
})(JOB || (JOB = {}));
var personTS = {
    // then assign the values
    name: "Ege",
    age: 21,
    hobbies: ["Drawing", "Coding"],
    favouriteWords: ["Aga", 3, true],
    role: [1, "first"],
    job: JOB.EMPLOYEE
};
console.log(personTS.name);
console.log(personTS.hobbies);
for (var _i = 0, _a = personTS.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // does not complain as it knows each hobby is a string
}
console.log(personTS.favouriteWords[0]);
for (var _b = 0, _c = personTS.favouriteWords; _b < _c.length; _b++) {
    var word = _c[_b];
    //console.log(hobby.toUpperCase()); // does complain as it doesn't know if each word is a string
}
console.log(personTS.role);
//tuples are allowed the push and pop operations
personTS.role.push(2);
personTS.role.push("second");
console.log(personTS.role);
//personTS.role.push(false); other type of push are not allowed
personTS.role.pop();
personTS.role.pop();
console.log(personTS.role);
console.log("Job is " + personTS.job);
