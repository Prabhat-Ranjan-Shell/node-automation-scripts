const vm = require('vm');

// const context = {
//   x: 10,
//   y: 20
// };

const code = 'function sumAll(...rest) {\n    const x = [...rest];\n    return (...y) => {\n        if (y.length) {\n            return sumAll(...x, ...y);\n        }\n        return x.reduce((a,b) => a+b, 0);\n    }\n}\n\nconsole.log(sumAll(1,2,3)(2,3,4)(3,4,5)(4,5,6)(5,6)());'

const script = new vm.Script(code);

const result = script.runInNewContext();

console.log(result); // Output: 30
