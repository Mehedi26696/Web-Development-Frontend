//function in obj

const mySym = Symbol("key1")

const JsUser = {
    name : "mehedi",
    "full name": "Mehedi Hasan",
    [mySym]: "mykey1",
    id : 3456,
    age : 25,
    location : "Dhaka",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturday"]
}

//console.log(JsUser)

JsUser.greeting = function() {
     console.log("Hello JsUser")
}

console.log(JsUser.greeting)  //[Function (anonymous)]

console.log(JsUser.greeting())  
//Hello JsUser
//undefined

