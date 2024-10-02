
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

(async function main() {

    let a = await sleep()

    console.log(a)

    let b = await sleep()

    console.log(b)
    
})()

