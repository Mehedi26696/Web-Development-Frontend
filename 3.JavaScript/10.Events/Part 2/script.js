



// document.querySelector(".child").addEventListener("click",()=>{
//         alert("Child was clicked")
// })


// document.querySelector(".childcontainer").addEventListener("click",()=>{
//     alert("childcontainer was clickd")
// })



// document.querySelector(".container").addEventListener("click",()=>{
//     alert("container was clicked")
// })



//If child was clicked the autometically childcontainer and container was clicked
// it's called bubbling


//to stop bubbling we have to use stoppropagation


document.querySelector(".child").addEventListener("click",(e)=>{
        e.stopPropagation()
        alert("Child was clicked")
})


document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("childcontainer was clickd")
})



document.querySelector(".container").addEventListener("click",(e)=>{
    alert("container was clicked")
})
