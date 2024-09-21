//Callback function

//Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
//If a function uses as an argument for another function then it's called callback function


const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Mehedi");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)