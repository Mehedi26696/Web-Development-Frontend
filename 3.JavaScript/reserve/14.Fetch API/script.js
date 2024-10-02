
//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully


async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
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