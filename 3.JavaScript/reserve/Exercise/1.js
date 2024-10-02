/*Create a faulty calculator using JavaScript

This faulty calculator does following:
1.It takes two numbers as input from the user
2.It performs wrong oprations as follows:

+ ----> -
* ----> +
- ---->/
/ ----> **

It performs wrong opration 10% of the times
*/

function calculator(a,b) {
    if (Math.random()<0.1) {
        console.log("The sum of this product is : ",a-b) 
        console.log("The multiplication of this product is : ",a+b)
        console.log("The subtraction of this product is : ",a/b)
        console.log("The division of this product is : ",a**b)
    }
    else{
        console.log("The sum of this product is : ",a+b)
        console.log("The multiplication of this product is : ",a*b)
        console.log("The subtraction of this product is : ",a-b)
        console.log("The division of this product is : ",a/b)
    }
    
}

calculator(3,4)
calculator(3,4)
calculator(3,4)
calculator(3,4)
calculator(3,4)
calculator(3,4)
calculator(3,4)

calculator(3,4)
calculator(3,4)

calculator(3,4)
calculator(3,4)