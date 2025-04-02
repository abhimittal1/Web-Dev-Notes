// factory function -- to create the objects in the easy way
function carFactory(carName, carColor) {
    return car = {
        carName,//  ==> carName: carName,
        carColor: carColor,
        speed() {
            console.log("Speed of the car is good :)")
        },
        breaking() {
            console.log("Speed is decreasing ");
        }
    };
};

let BMW = carFactory("X7", "white");
let Merc = carFactory("E-class", "white");
let Audi = carFactory("Q7", "white");
let Ford = carFactory("Mustan", "white");
let RR = carFactory("Ghost", "white");

// Constructor function -- to create the objects in the easy way
function BikeFactory(bike, color) {
    this.BikeName = bike;
    this.Color = color;
    this.speed = function () {
        console.log("Speed of the bike is good :)")
    };
    this.breaking = function () {
        console.log("Speed is decreasing of bike ");
    };
};

let BMW1 = new BikeFactory("S1000RR", "white");
//

BMW1.speed1 = '100kmph';
console.log(BMW1);
delete BMW1.speed1
console.log(BMW1);

// factory vs constructor function --> factory function uses more space because it make the function for every instance that will be made 
// but the constructor function is more space efficient because it share the function with other don't make the copy


// In javascript functions are also like the object
console.log(BikeFactory.call);

// types in javascript
// 1. primitives are copied by their values
// 2. References are copied by their address


// for-in | for-each LOOP

let rectangle = {
    len: 1,
    bre: 2
};

console.log(rectangle[length]);
// here key means the variable ---> travels the whole object

// for-in loop --> can travel the objects
for (let key in rectangle) {
    console.log(key, rectangle[key]);
}
// for-of loop --> only on the iterables
for (let key of Object.keys(rectangle)) { // here Object.keys(rectangle) --> is giving the array
    console.log(key, rectangle[key]);
}

/*
for-in on arrays: Iterates over the indexes (not recommended for arrays).
for-of on arrays: Iterates directly over the values (recommended for arrays).
 */

//searching (properties) in the rectangle
if ('len' in rectangle) {

    console.log("YES Present")
}
else {
    console.log("NO Absent")
}

// Objects Cloning

//1. iteration
let scr = {
    value: 3,
};
let dest = {};
for (let key in scr) {
    dest[key] = scr[key];
}

//2.Assign
let scr1 = { value: 7, };
let dest1 = Object.assign({}, scr1);
console.log(dest1);

//3.Spread
let scr2 = {
    value: 3,
}
let scr4 = { value: 6 }
let dest2 = { ...scr2,scr4 };
console.log(dest2);
// Garbage Collection --> find the variables/Objects that are not using the any space so de-allocate them
// we have no control on this --> always runs in the background automatically