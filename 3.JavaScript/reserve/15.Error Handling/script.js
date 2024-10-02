

let a = prompt("Enter first number")

let b = prompt("Enter second number")

//let sum = a+b  wrong because it gives us ab it's add two string 

//parseInt for convert to integer

//but if user give some wrong input then calculation didn't happen and gives "The sum is NaN" and doesn't throw an error message
//to throw custom error

if (isNaN(a) || isNaN(b)) {
    
    //throw new Error("Sorry this is not allowed");
    throw SyntaxError("Sorry this is not allowed");
    
    
}
let sum = parseInt(a)+parseInt(b)


//console.log("The sum is",sum*x) //this gives an error 
//error handle

// try {
    
//     console.log("The sum is",sum*x)
// } catch (error) {
    
//     console.log("Find error")
// } finally{
//     console.log("All Done")
// }

//In some cases we used finally satement and it always run if it's either try or catch but main reason for using finaaly 
// for function in function we know after return statement any part of this function doesn't execute but in the case of finally it's execute(this is the main reason)


function main( ) {

    try {
    
        console.log("The sum is",sum)
        return true
    } catch (error) {
        
        console.log("Find error")
        return false
    } finally{
        console.log("All Done")
    }
    
}

let c = main()