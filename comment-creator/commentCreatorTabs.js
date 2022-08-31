const fs = require('fs');

fs.readFile('./test.json', 'utf-8', (err, data)=>{
    let d = {};
    const dataParse = JSON.parse(data);

    const t = {
        "id": "",
        "name": "",
        "type":"commentbox"
    }

    dataParse.forEach(item => {
        item?.innerTabs?.forEach(it => {
            const td = {...t};
            td.id = `${it.id}-comment`;
            td.name = `${it.name}-comment`;
            it?.content?.push(td);
        })
    });

    d = JSON.stringify(dataParse);

    if(!err) {
        fs.writeFile('./comment_test.json', d, (err)=>{
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