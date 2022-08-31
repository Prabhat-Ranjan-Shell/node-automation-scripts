const fs = require('fs');

fs.readFile('./test.json', 'utf-8', (err, data)=>{

    const d = data.split('\n').map(item => item.replace(/\n|\t|\r| /g, '')).join('');
    const od = d.replace(/'/g, "''");

    if(!err) {
        fs.writeFile('./minified_output.json', od, (err)=>{
            if(err) {
                console.log("Some error occured!!");
            } else {
                console.log("Write finished");
            }
        });
    } else {
        console.log("Some error occured", err);
    }
})