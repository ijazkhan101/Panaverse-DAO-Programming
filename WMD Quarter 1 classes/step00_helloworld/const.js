"use strict";
//use const where variable values do not change
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
console.log("let:"); // Error: z is not defined in this scope
