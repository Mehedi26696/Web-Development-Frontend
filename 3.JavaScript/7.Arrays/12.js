//for in loop

let a=[1,93,4,6,8];

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];

        console.log(key,element);
        
    }
}