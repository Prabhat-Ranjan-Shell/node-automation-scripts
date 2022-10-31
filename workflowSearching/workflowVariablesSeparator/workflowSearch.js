const wf = require('./workflowData.json');

let count = 0;

// MZ - float values, no unicode
// OH - no float values or unicode 
// Single CHGP - ≤ & ≥ signs
// Smart well - no float or unicode
// Stack commingle - no float or unicode
// Stack Selective - no float or unicode


// To get all the values
function wfFilter(data) {
    return data.reduce((ac, cr) => {
        cr?.innerTabs?.forEach(item => {
            item?.content?.forEach(it => {
                if(it.options) {
                    it?.options?.forEach(i => {
                        ac.push({[it.name]: i.value});
                        count += 1;
                    })
                }
            })
        })
        return ac;
    }, []);
}

// Copy to clipboard
const util = require('util');
require('child_process')
.spawn('clip')
.stdin.end(util.inspect(wfFilter(wf)));

console.log("-WF-COUNT-", count);
console.log("-WF-Res-", wfFilter(wf));