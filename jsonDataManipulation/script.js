const fs = require('fs');
const data = require('./data.json');

const obj = data.projects || [];

// const clientCreatedProjects = obj.filter(item => {
//     if(!['Rabish.Kumar@shell.com',
//     'Prabhat.P.Ranjan2@shell.com',
//     'nesara.gn@shell.com',
//     'Nesara.GN@shell.com',
//     'Kapil.Verma@shell.com',
//     'Pavan.Sreenivasa@shell.com',
//     'sumit.sharma3@shell.com',
//     'Mahesh.M.Heda@shell.com'
//     ].includes(item.createdBy)) {
//         return item;
//     }
// })

const listLen = obj.length;

fs.writeFile('./result.json', JSON.stringify(listLen), (err) => {
    if(err) {
        console.log("Write Failed!");
    }
});

console.log("--", listLen);