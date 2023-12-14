/* Certainly! Here are some tricky Node.js interview questions to test a candidate's deeper understanding of Node.js:

1. **Explain the difference between package.json dependencies: "^x.y.z" and "~x.y.z".**

2. **What is the purpose of the `module.exports` object in Node.js?**

3. **What is the Event Loop in Node.js? How does it work?**

4. **Explain the purpose of the `Buffer` class in Node.js.**

5. **What is a memory leak in Node.js? How can it be prevented?**

6. **What is the purpose of the `process` object in Node.js?**

7. **Explain the difference between callback functions, promises, and async/await in handling asynchronous code.**

8. **How does Node.js handle child processes?**

9. **Explain the purpose of the `cluster` module in Node.js.**

10. **What is the purpose of the `os` module in Node.js?**

11. **What is the purpose of the `util` module in Node.js?**

12. **Explain the difference between `process.nextTick` and `setImmediate` in Node.js.**

13. **What is a stream in Node.js? How are readable and writable streams implemented?**

14. **Explain the purpose of the `require` function in Node.js. How does it work under the hood?**

15. **What is middleware in Express.js? How does it work?**

16. **Explain the purpose of the `npm` package manager and how it is used in Node.js.**

17. **How does Node.js handle concurrency?**

18. **Explain the purpose of the `domain` module in Node.js.**

19. **What is clustering in Node.js and why is it useful?**

20. **Explain the purpose of the `vm` module in Node.js.**

These questions delve into various aspects of Node.js, 
including event loop, streams, modules, child processes, 
memory management, and more. They are designed to test a 
candidate's in-depth knowledge of Node.js and their ability to work with the runtime 
environment effectively. Remember to follow up on their answers with additional questions 
or ask for explanations to ensure a thorough understanding.
*/

//
// const os = require('os');

// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// console.log(`Total Memory: ${os.totalmem()} bytes`);
// console.log(`Free Memory: ${os.freemem()} bytes`);
// console.log(`CPU Information:`);
// console.log(os.cpus());
// console.log(`Network Interfaces:`);
// console.log(os.networkInterfaces());


const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
});

readableStream.on('end', () => {
  console.log('Finished reading data');
});

readableStream.on('error', (err) => {
  console.error(`Error reading data: ${err}`);
});
