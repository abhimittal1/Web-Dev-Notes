let a = 5;
var b = 9;
// let vs var --> var is global but let is local to the scope...
// let vs var --> var can be redecleared but let can't be redecleared..

// this is the object -- OBJECTS
let person = {
    namer: 'abhishek',
    rollno: 3
};
console.log(person.namer)
console.log(person['namer'])

//ARRAY

let arr = [3, 'abhishek', 345, true]
console.log(arr)

// == n === are different ... == means value is same but === means that value and Datatype is equal
c = '5';
console.log(a === c) // strictly equal hai
console.log(a == c) // loose equaility

let status1 = (a > b) ? 'a is big then b' : 'a is small then b';
console.log(status1, "--> by the use of the ternary operator");

console.log(false || 'abhishek')
console.log(true || 'abhishek')

if (a > b) {
    console.log("a is big");
} else {
    console.log('b is big');
}
let num = 2;
switch (num) {
    case 1:
        console.log('A')
        break;
    case 2:
        console.log('B')
        break;
    case 3:
        console.log('C')
        break;
    default:
        console.log('again pls :)')
        break;
}

for (let i = 0; i <= 4; i++) {
    console.log('Abhishek Mittal ' + i, "for Loop");
}
let j = 0;
do {
    console.log('Abhishek Mittal - ' + j, "Do while loop");
    j++;
} while (j <= 4);

while (j <= 10) {
    console.log('Abhishek Mittal - ' + j, "while loop");
    j++;
}

