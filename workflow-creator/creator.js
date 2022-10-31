const schema = [];
let n = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter no of tabs?`, tabs => {
    n=tabs;
    // console.log(`Hi ${tabs}!`);
    for(let i=0; i<n; i++) {
        readline.question(`Enter tab name?`, tab => {
            const UID = tab.split(' ').join('');
            const obj = {
                "id": `${UID}`,
                "name": `${UID}`,
                "label": `${tab}`,
                "innerTabs": []
            }
            schema.push(obj);
            if(i === n-1) readline.close();
        });
    }
    console.log("Object", schema);
});

// console.log("Object", schema);