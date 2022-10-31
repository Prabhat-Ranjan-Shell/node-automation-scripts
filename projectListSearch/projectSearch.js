const data = require('./projectList.json');
const fs = require('fs');

const filteredProjects = data.filter(item => (item.emailid?.toLowerCase() !== 'nesara.gn@shell.com')).filter(item => (item.createdBy?.toLowerCase() !== 'nesara.gn@shell.com'));

// console.log("Projects: ", JSON.stringify(filteredProjects));


fs.writeFile('result.json', JSON.stringify(filteredProjects), (err, data) => {
    if (err) {
        throw Error('Write failed!');
    }
})

