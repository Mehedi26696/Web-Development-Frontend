//Used to solve callback hell problem

let prom1 = new Promise((resolve, reject)=>{

    let b = Math.random()
    if (b<0.5) {
        reject("Random number is not support you")
    }

    else{
        setTimeout(() => {
            console.log("I am done")
            resolve("Mehedi")
        }, 3000);

    }
  
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let prom2 = new Promise((resolve, reject)=>{

    let b = Math.random()
    if (b<0.5) {
        reject("Random number is not support you 2")
    }

    else{
        setTimeout(() => {
            console.log("I am done 2")
            resolve("Mehedi 2")
        }, 3000);

    }
  
})

let p3 = Promise.all([prom1,prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
        console.log(err)
 })
