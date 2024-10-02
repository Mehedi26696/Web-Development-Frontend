
//times in milisecond


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}


// setInterval(() => {
//     document.querySelector(".childcontainer").style.background = getRandomColor()
//     document.querySelector(".child").style.background = getRandomColor()
//     document.querySelector(".container").style.background = getRandomColor()
// }, 1000);

//we cal clear interval by

// let a = setInterval(() => {
//     document.querySelector(".childcontainer").style.background = getRandomColor()
//     document.querySelector(".child").style.background = getRandomColor()
//     document.querySelector(".container").style.background = getRandomColor()
// }, 1000);

// clearInterval(a)

//TImeout it's change just once
setTimeout(() => {
    document.querySelector(".childcontainer").style.background = getRandomColor()
    document.querySelector(".child").style.background = getRandomColor()
    document.querySelector(".container").style.background = getRandomColor()
}, 1000);