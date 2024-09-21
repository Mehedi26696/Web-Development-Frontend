//async and await use for controling javascript asynchronous function 

//for using async function execute in the background but code run successfully 

//for using await whent the function getData called program for getting the output from the function after getting execute later part of the code


async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(345)
        }, 3000);
    })
    
}


async function main() {

    console.log("Loading Modules")

    console.log("DO Something")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("task 2")
    
}

main()