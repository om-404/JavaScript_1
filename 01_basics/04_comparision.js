// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   // Js automatic convert string to number but this is bad practice.
// console.log("02" > 1);  // always insure that you compare only same datatypes.

console.log(null > 0);  // output - false
console.log(null == 0); // output - false 
console.log(null >= 0);  // output - true  // note - the reason is that equality and comparison
                         // work differently , comparison convert null to the number, treating
                         // it 0 thats why null >= 0 is true

console.log(undefined == 0);   // output -  false 
console.log(undefined > 0);    // output -  false
console.log(undefined < 0);    // output -  true

// == double equal, === triple equal work diffrently

// ===   it check value as well as datatypes

console.log("2" === 2);

///////////////////  AVOID SUCH COMPARISON IN CODE //////////////////
