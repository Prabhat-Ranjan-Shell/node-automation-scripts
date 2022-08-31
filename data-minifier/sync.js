const fs = require('fs');

// const data = fs.readdirSync('C:/');
fs.readdir('C:/', (err, data)=>{
    console.log("Data: ", data);
});

// console.log("Data: ", data);
console.log("This comes after");