//for in loop

let obj = {
    name: "Mehedi",
    role: "Student",
    institution: "DU"
}

for (const key in obj) {

    const element = obj[key];
    console.log(key, element)


}

for (const key in obj) {


    console.log(key)


}