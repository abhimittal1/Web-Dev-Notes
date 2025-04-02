// IN-BUILT Objects
//1. Math Object
console.log(Math.sqrt(2)); // many more

// 2. String -- > we have Primitive as well as Object string in javascript
let lastName = "Mittal"; // this is primitive type
let firstName = new String("Abhishek"); // this is Object type

// we can use the primitive type by the DOT notation to have more uses
console.log(lastName.length);
console.log(lastName.startsWith("Mit"));
console.log(firstName.endsWith("k"));
console.log(firstName[2]);
let message = "this is message of the split function";
let words = message.split(" ", 5);
console.log(words);
console.log(firstName.indexOf("s"));

let trim = "   helllo   after the trim";
console.log(trim.trim(), "--> This will remove the spaces before and after the content :)");


//3. Template Literal / placeholders

let temp = `this is
${firstName} ${lastName}  
Student of JIIT-62`;

console.log(temp);


// 4. DATE n TIME

let date = new Date('octobar 15 2002 04:15'); // many formates hai bhai
console.log(date);
let date2 = new Date(2003, 9, 15, 7, 15);
console.log(date2);
date2.setFullYear(2002)
console.log(date2);

//ARRAYS (Collection of items) --> object hai .. reference type
let numbers = [1, 2, "Abhishek", 6, 81, 66]; // creating the simply array
console.log(numbers);
// console.log(numbers[2]);

//1. Adding the elements

// adding the end --> .push()
// adding at the begin -- > .unshift()
// adding at the middle  -- > .splice( ,  , )

numbers.push("Mittal")
console.log(numbers);
numbers.unshift("Abhi");
console.log(numbers);
numbers.splice(2, 0, "a", "b"); // .splice("starting" , "del the elements" , "add the elements you want")
console.log(numbers);

// 2. Searching  -- (ON THE PRIMITIVES)
console.log(numbers.indexOf(3));
if (numbers.indexOf("Abhi") != -1) {
    console.log("Present hai"); // not a good way
}
console.log(numbers.includes(1)); // gives the true/ false
console.log(numbers.indexOf(6, 3)); // indexOf('element looking for ' , 'from where ' )

// This will not work for the objects ... WORK FOR THE PRIMITIVE TYPES ONLY

// 2.b. Searching -- (FOR THE OBJECTS --> CALLBACK FUNCTIIONS)
// CALLBACK FUNCTION --> it is a function that passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

let courses = [
    { no: 1, naam: "Abhishek" },
    { no: 2, naam: "Mittal" }
] // This is the array of the objects 
let course = courses.find(function (course1) {
    return course1.naam == "Mittal";
})
console.log(course);

//arrow function --> only if we have the single parameter n statement
let course1 = courses.find(course2 => course2.naam === "Abhishek");
console.log(course1);



//3. Removing the element 
// removing form end --> .pop()
// removing form the begin -- > .shift()
// removing form the middle  -- > .splice( ,  , ) 



let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.splice(1, 1); // this is too good for adding/removing the elements in the array
console.log(arr);

//4. Emptying the array
let numbers1 = [1, 2, 3, 4, 5];
let num = numbers1; // this is pointing the same array -- (BECAUSE COPY BY THE ADDRESS)
numbers1 = []; // this is not a good way ---> by this way we are POINTER it to an empty array.
// NUM WILL STILL EXIST :(



// make the lenght = 0 
let number2 = [1, 2, , 51, 511];
number2.length = 0; // this is a best way
console.log(number2);

// by the SPLICE function

let nu = [121, 311, 1, 81, 61, 81, 25];
nu.splice(0, nu.length);
console.log(nu);


// BY the loop
let nu1 = [1, 51616, 1861, 1, 3, 53,];
while (nu1.length != 0) {
    nu1.pop();

}
console.log(nu1);

// *****************Combining & slicing the array************

let first = [1, 2, 3];
let second = [4, 5, 6];
let combine = first.concat(second); // BY the function 
let third = [...first, "Adding by the spread operator", ...second]; // ANOTHER WAY to combine
console.log(third);

let sliced = combine.slice(2, 4); // .slice(x,y) ,, x-> starting , y-> ending(not include the y);
console.log(sliced);
let copy_byslice = combine.slice();  // FULL SLICING :)

//************************* Iterating AN ARRAY****************************
// 1. FOR-OF loop
let loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of loop) {
    console.log(value);
}
console.log("FOR_OF AND FOR_EACH LOOPS :")
//2. FOR_EACH loop
let loop1 = [...loop];
loop1.forEach(function (numbers4) {
    console.log(numbers4);
});
// loop1.forEach(numbers4 =>  console.log(numbers4)); ***ARROW FUNCTION for the (for-each loop)

// ******************* JOINING / SPLITING / SORTING THE ARRAY ***************
let ber = [1, 20, 3, 5, 49, 4];
let joint = ber.join(" : ");
console.log(joint);
console.log(joint.length);

let split = joint.split(" : "); // this create the array  
console.log(split);

console.log(ber.sort());
console.log(ber.reverse());

// ************************ FILTERING ARRAY ******************
let a = [11, 1513, -46, 116, 2, 0, -7, 262, -80];
let filtered = a.filter(function (value) {
    return value >= 0;
})
// let filtered = a.filter(value => value >= 0); --> ** ARROW FUNCTION **

console.log(filtered);

// *********************** MAPPIING **********************
// --> Maps each element of the array to something else
let number0 = [1, 2, 3, 4, 5, 6];
let items = number0.map(value => 'Student_no ' + value);
console.log(items);

// ************** Mapping with Objects
let b = [0, 1, -4, 3, 25, -591, -1, 2];
let filtered_b = b.filter(value => value < 0);
console.log(filtered_b);

// we are mapping the filtered_b values to the map --> objects
let map_object = filtered_b.map(function (value) {
    let item = { value_hai: value };
    return item;
})
console.log(map_object);

// chaining ... converting the above in short code ...

let b1 = [0, 1, -4, 3, 25, -591, -1, 2];

// we are filtering and mapping the b1 in the single line of the code .....
let map_object1 = b1.filter(value => value < 0).map(value => {value_hai: value })
console.log(map_object);







