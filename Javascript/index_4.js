// ************** Functions ******************************
// Javascript engine uses -->  // HOISTING --> is the process of moving the function declaration to the top of the file.
run();
function run() {
    console.log("this is running due to hoisting...");
    console.log("function define is written after the function call :)")
};

// function assignment
// 1. Named
let stand = function standing() {
    console.log("we are standing ... NAMED function assignment")
    console.log("Here HOISTING will not work ... :( ")
};
stand();

let jump = stand; //copy
jump();

// 2. Anonymous
let stand2 = function () {
    console.log("we are standing ... ANONYMOUS function assignment")
}
stand2();

//

//*************** Arguments --> not a ARRAY (but it stores the all parameters passed in the objects) **************************


// we have made a dynamic function that will sum as many as the parameters we pass in it
function sum1(a, b) {
    let total = 0;
    for (let value of arguments) { // arguments is a object in the function that will stores all the parameter in the function passed
        total = total + value
    }
    return total;
}
let a = sum1(1, 2, 3);
console.log(a);

// ********************** Rest operator (...) **************
// --> this will create the array of the extra parameters passed

function sun(...args) {
    console.log(args);
}
sun(1, 2, 3, 4, 5, 6, "this is creating the array of the parameters ");

function sun1(a, b, ...args) {
    console.log(args, "array of the extra parameters");
}
sun1(1, 2, 3, 4, 5, 6, "this is creating the array of the parameters ");

// ***************** Default Parameters ************
function interest(p, r = 5, y = 10) {
    return p * (r * (y / 100));
}
console.log(interest(1000, 5, 5));

// ****************** getter (access the properties ) and setter(can change the values) *************** 
let person = {
    fname: "abhishek",
    lname: "mittal"
};
console.log(person);

function full() {
    return `${person.fname} + ${person.lname} ,, this is done by the function. --> this is only the read only function `;
}

console.log(full());

// 
let student = {
    firstName: "Abhi",
    lastName: "Mittal",
    get full() {
        return `${student.firstName} + ${student.lastName}`;
    },
    set full(value) {

        // if(typeof(value) !== String){
        //     throw new Error("you have sent a wrong datatype in the setter")
        // }

        let part = value.split(' '); // assuming that we will get the full name from the user
        this.firstName = part[0];
        this.lastName = part[1];
    }
};
console.log(student.full, "by the getter");
student.full = "suraj mittal";
console.log(student.full, "after the use of the setter");
console.log(" ");
console.log("getter n setter is define inside the object ,, if we make the function outside then it will be only the read only function :)");

// *************** TRY AND CATCH BLOCK  [ ERROR HANDLING ] ****************************
try {
    student.full = "abhi Mittal";
}
catch (e) {
    alert(e);
};


// ********************** Scope *******************************

// var --> it has the scope to the function,, if outside the function then it is has the scope to the complete file.
// let --- > scope to the nearest {}

// ************************* REDUCING THE ARRAY****************************

let arr = [1, 2, 3, 4];
let total = 0;
for (const value of arr) {
    total = total + value;
}
console.log(total);

console.log("Like in the above we are using the for-of loop to calculate the sum of the arr but we have the one more way  --- > REDUCE ARRAY TO THE DIFFERENT FORM");

// arr.reduce( callbackfunction  , value);
let totalsum = arr.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
console.log(totalsum, " this is by the reduced form of the array  ---> REDUCE FUNCTION...");










