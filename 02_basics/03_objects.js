// objects declare in two way first is constructor and second is literal
// singleton -- when it made from constructor not from literal
// Object.create  -- object is created using constructor method

// object literals

const mySym = Symbol("key1")  // symbol is datatype


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // for symbol we use square brackets
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])   ----> Always use this notation
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)  ---> this is not use as symbol, its datatype is string
// console.log(JsUser[mySym])  --> this is syntax to print symbol datatype

JsUser.email = "hitesh@chatgpt.com"   // this change the previous email
// Object.freeze(JsUser) ---> this will frezz the object no further change can be made
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // jab hame same object ka reference lena hai tab hum this ko use krte hai
}                                                // string interpulation

console.log(JsUser.greeting);  // give output undefined
console.log(JsUser.greeting());   // 
console.log(JsUser.greetingTwo());
