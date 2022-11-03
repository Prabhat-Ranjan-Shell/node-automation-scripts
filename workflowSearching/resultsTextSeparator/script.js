const fs = require('fs');
const data = require('./data.json');

// To get all the values
function resultFilter(data) {
    return data.reduce((ac, cr) => {
        cr?.innerTabs?.forEach(item => {
            item?.content?.forEach(it => {
                if (it.type === 'resultbox') {
                    ac.push(it.label);
                }
            })
        })
        return ac;
    }, []);
}

fs.writeFile('result.json', JSON.stringify(resultFilter(data)), (err) => {
    if (err) {
        throw Error('Write failed!');
    }
})
