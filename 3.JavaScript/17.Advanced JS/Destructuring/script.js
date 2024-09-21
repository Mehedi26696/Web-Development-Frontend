
async function sleep( ) {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
    
}


//It's gives an error
// let a = await sleep()

// let b = await sleep()


//IIFE(Immediately Invoked Function Expression)

function sum(a,b,c) {

    return a+b+c
    
}

(async function main() {

     //Destructuring

    // let [x,y] = [1,5]
    // console.log(x,y)

    //  let [x,y, ...rest] = [1,5,7,8,10]
    // console.log(x,y,rest)

    // let obj ={
    //     a : 1,
    //     b : 2,
    //     c : 3
    // }

    // let {a,b} = obj

    // console.log(a,b)

    let arr = [1,5,6]

    console.log(arr[0]+arr[1]+arr[2])

   console.log(sum(arr[0],arr[1],arr[2]))

   //spread syntax

   console.log(sum(...arr))

    
})()

