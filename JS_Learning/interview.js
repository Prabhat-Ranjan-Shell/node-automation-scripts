// Prototype Inheritance
function abc(name, age) {
    this.name = name;
    this.age = age;

   this.setName = function(name) {
        this.name = name;
    }

    this.setAge = function(age) {
        this.age = age;
    }

    this.getName = function() {
        console.log("My name is:", this.name);
    }

    this.getAge = function() {
        console.log("My age is: ", this.age);
    }

}

function xyz(name, age, company) {
    abc.call(this, name, age);
    this.company = company;

    this.getCompany = function() {
        console.log("My company is: ", this.company);
    }

    this.setCompany = function(company) {
        this.setCompany = company;
    }
}

// xyz.prototype = Object.create(abc.prototype);

// const a = new xyz('Prabhat',43, 'Wipro');
// // a.setName("Ranvijay");
// // a.setAge(32);
// console.log("----------", xyz.prototype);
// a.getName();
// a.getAge();
// a.getCompany();



// create the expected output containing sum of occurrences of color and type, in the below example green has 2 occurrences so denote the output with
// green as key and value as 2 similarly circle repeat 3 times shows circle as key and 3 as value, do not iterate the array more than once to calculate the output

// const data = [
//   {
//     color: "green",
//     type: "circle",
//   },
//   {
//     color: "red",
//     type: "circle",
//   },
//   {
//     color: "red",
//     type: "square",
//   },
//   {
//     color: "yellow",
//     type: "triangle",
//   },
//   {
//     color: "green",
//     type: "circle",
//   },
// ];

 

//expected output
// { green: 2, circle: 3, red: 2, square: 1, yellow: 1, triangle: 1 };


// const getDistinctCount = (arr) => {
//   const obj = {};

//   arr.forEach(ele => {
//     Object.values(ele).forEach(item => {
//       obj[item] = (obj[item] ?? 0) + 1;
//       // obj[ele.type] = (obj[ele.type] ?? 0) + 1;
//     });
//   });

//   return obj;
// }

// console.log(getDistinctCount(data));



/*You are given an array of integers and a target sum. Your task is to write a function that finds 
and returns all pairs of elements from the array that add up to the given target sum.
If no such pairs are found, the function should return an empty array.

Write a function called findPairsWithSum that takes two parameters:

An array of integers.
A target sum.

The function should return an array of arrays, where each inner array contains two elements 
that form a pair whose sum equals the target sum. The order of pairs in the result doesn't matter.
If the array contains duplicate elements, you can consider different occurrences of the same value
as distinct pairs. For example, in the array [3, 3, 4] with a target sum of 6, two pairs [3, 3] 
are valid solutions.
You are free to assume that the input array is non-empty and conatins only positive integers.
Your solution should have an efficient time complexity.

Function Signature:
function findPairsWithSum(array, targetSum) {
  // Your code here
}
 
Example
const array = [2, 3, 5, 4, 6, 8]; const targetSum = 8;
console.log(findPairsWithSum(array, targetSum));// Output: [[2, 6], [3, 5]]console.log(findPairsWithSum([1, 2, 3, 4], 10));// Output: []console.log(findPairsWithSum([3, 3, 4, 5], 6));// Output: [[3, 3]]console.log(findPairsWithSum([2, 4, 6, 8, 10, 12, 14, 16], 20));// Output: [[4, 16], [6, 14], [8, 12]]console.log(findPairsWithSum([1, 3, 5, 7, 9], 8));// Output: [[1, 7], [3, 5]]console.log(findPairsWithSum([2, 6, 10, 12], 18));// Output: [[6, 12]]
*/

// const abc = {
//   name: "ABC",
//   fn: () => this.name
// }

// function xyz() {
//   console.log(this.name);
// }

// function Abc() {
//   this.name = "ABC";
//   return this;
// }

// const a = Abc();


// "sjbxjasdcbjsdbvk kjbbsdkjfbwkje jk jksdbkjc sdkj ckjds"
// "c dffjcsadjk bksdbjkj jfjdj kfskdhfkw kbksdbkjsd"



// const findPairsWithSum = (arr, target) => {
//     const groups = [];

//     for(let i=0; i<arr.length; i++) {
//       for(let j=i+1; j<arr.length; j++) {
//         if((arr[i] + arr[j]) === target) {
//           groups.push([arr[i], arr[j]]);
//         }
//       }
//     }

//     return groups;
// }

// ----------------------------------------

// const array = [2, 3, 5, 4, 6, 8];
// const targetSum = 8;

// console.log(findPairsWithSum(array, targetSum));
// Output: [[2, 6], [3, 5]]

// console.log(findPairsWithSum([1, 2, 3, 4], 10));
// Output: []

// console.log(findPairsWithSum([3, 3, 4, 5], 6));
// Output: [[3, 3]]

// console.log(findPairsWithSum([2, 4, 6, 8, 10, 12, 14, 16], 20));
// Output: [[4, 16], [6, 14], [8, 12]]

// console.log(findPairsWithSum([1, 3, 5, 7, 9], 8));
// Output: [[1, 7], [3, 5]]

// console.log(findPairsWithSum([2, 6, 10, 12], 18));
// Output: [[6, 12]]



// function matrix(n) {
//   const res = Array(n).fill().map(item => Array(n).fill(0));
//   let startRow = 0, startCol = 0, endRow = n - 1, endCol = n - 1;
//   let k=1;
//   while (startRow <= endRow && startCol <= endCol) {
//       for (let i = startCol; i <= endCol; i++) {
//           res[startRow][i] = k;
//           k += 1;
//       }
//       startRow += 1;

//       for (let i = startRow; i <= endRow; i++) {
//           res[i][endCol] = k;
//           k += 1;
//       }
//       endCol -= 1;

//       for (let i = endCol; i >= startCol; i--) {
//           res[endRow][i] = k;
//           k += 1;
//       }
//       endRow -= 1;

//       for (let i = endRow; i >= startRow; i--) {
//           res[endRow][startCol] = k;
//           k += 1;
//       }
//       startCol += 1;
//   }

//   return res;
// }

// console.log("rrrrrrr", matrix(3));

// const Stack  =  require('./AlgoCasts/exercises/stack/index');

// class Queue extends Stack {

//     constructor() {
//         super();
//         this.data = [];
//         this.queueData = [];
//     }

//     add(v) {
//         this.data.push(v);
//     }

//     peek() {
//         return this.data[0];
//     } // 1,2

//     remove() {
//         const len = this.data.length
//         for(let i=0; i<len; i++) {
//             this.queueData.push(this.data.pop());
//         }
//         return this.queueData.pop();
//     }
// }

// const queue = new Queue();

// queue.add(1);
// queue.add(2);

// console.log(queue.peek());
// console.log(queue.peek());

// function reverseInt(n) {
//     let revInt = 0;
//     let temp;
//     while(n) { // 1, 98, 10 -- 8, 9, 180-- 9, 0,  
//         temp = n%10
//         n = parseInt(n/10);
//         revInt = n ? (revInt + temp)*10 : revInt+temp
//     }

//     return revInt;
// }

// console.log(reverseInt(876));


// /*You are given a string containing various characters. Your task is to implement a function getSwappedChars(input) that takes this string as input and returns a modified string based on the following rule:

// For lowercase alphabetic characters (between 'a' and 'z'), the function should swap each character symmetrically around the midpoint of the lowercase alphabet. For instance, 'a' should become 'z', 'b' should become 'y', 'c' should become 'x', and so on.
// Characters that are not lowercase alphabetic characters should remain unchanged in the resulting string.

// Write a function called getSwappedChars that takes one parameter:

// input: A string containing various characters.

// The function should return a new string where lowercase alphabetic characters are swapped symmetrically based on the rule mentioned above.

// Example
// */

// // string.fromCharCode   String.fromCharCode(97)

// function getSwappedChars(str) {
//     let result = "";

//     for(let s of str) {
//         let value = s.charCodeAt();
//         console.log(value);
//         if((value >= 97 && value <= (97+25))) {
//             result += String.fromCharCode((97+25 -(value-97)));
//         } else {
//             result += s;
//         }
//     }

//     return result;
// }




// console.log(getSwappedChars("abcABC123"));

// // Output: "zyxABC123"


// // console.log(getSwappedChars("apple is red")); // outputs zkkov rh ivw


// // console.log(getSwappedChars("abcdefghijklmnopqrstuvwxyz"));

// // // Output: "zyxwvutsrqponmlkjihgfedcba"


// // console.log(getSwappedChars("a1b2c3d4"));

// // // Output: "z1y2x3w4"


// // console.log(getSwappedChars("Hello World!"));

// // // Output: "Hvool Wliow!"


// // console.log(getSwappedChars("xyzXYZ789"));

// // // Output: "cbaXYZ789"


// // console.log(getSwappedChars("apple ORANGE"));

// // // Output: "zkkov ORANGE"


// // console.log(getSwappedChars("Let's swap the letters."));

// // // Output: "Lvg'h hdzk gsv ovggvih."



/*Object Property Access with Default Value
Question Description:

You are given an object, user, representing user information with nested properties. 
Your task is to write a function, helperFn, that retrieves properties from this object using 
a specified property path and returns their values. If the property is not found, 
the function should return a default value (if provided).

Input:
*/
// Given the object:

// const user = {

//   user: {

//     name: "some user",

//     address: {

//       country: "India",

//       city: "Bangalore",

//     },

//   },

// };

// Input:

// function helperFn(obj, path, defaultValue) {
//   // Your code here
//   if(!path) return undefined;

//   const p = path.split('.');

//   let temp = {};
//   p.forEach(ele => {
//     temp = temp[ele] || obj[ele];
//   });

//   if(!temp) return defaultValue;

//   return temp;
// }


// Output:

// const result1 = helperFn(user, "user.address.country");

// console.log(result1); // Output: "India"

// const result2 = helperFn(user, "user.address.postalCode");

// console.log(result2); // Output: "560029"

// const result3 = helperFn(user, "user.name", "new user");

// console.log(result3); // Output: "some user"

// const result4 = helperFn(user, "user.address", null);
// console.log(result4); // Output: '{country: "India", city: "Bangalore"}'
// const result5 = helperFn(user, null);

// console.log(result5); // Output: undefined



// ------------------------------------Need to study-----------------------------
// solid and right principle
// dry - don't repeat your code 

// graphql apollo client

// html5 apis 
// pwa 
// picture tag 
// sagas, thunk

// configure webpack
// b2c, b2b

// microfrontend, next JS, monorepo
// jest enzyme, RTL, functional testing, unit testing, MOCKING API, 
// TREE SHAKING, COMPOUND CoMPONENTt, REACT DESIGN PATTERN 
// bOILERPLATE SETUP 
// GENERATIVE aI  
// STORYBOOK
// NON FUNCTIONAL 
// a
// MODEL WINWOD 
// CSRF
// OWASP, SECURITY , CSP - CONTENT SECURITY POLICY, 
// ------------------------------------------------------------

// ___________________________________SPYRENT_____________________________________________________
// arr[] = {1, 4, 20, 3, 10, 5}, sum = 33

// Output: Sum found between indexes 2 and 4
// Sum of elements between indices
// 2 and 4 is 20 + 3 + 10 = 33

// Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
// Output: Sum found between indexes 1 and 4
// Sum of elements between indices
// 1 and 4 is 4 + 0 + 0 + 3 = 7

// Input: arr[] = {1, 4}, sum = 0
// Output: No subarray found

function getSum(arr, target) {

  for(let i=0; i<arr.length-1; i++) {
      let sum = arr[i];
      for(let j=i+1; j<arr.length; j++) {
          sum += arr[j]
          if(sum === target) {
              return [i, j];
          }
      }
  }
  return [];
}

// console.log(getSum([1, 4, 0, 0, 3, 10, 5], 7));
// Also look into use of Route Provider

// ________________________________SPYRENT ENDS______________________________________________

// ____________________________________OPEN TEXT____________________________________________
// checking size of window dimension in react and JavaScript
// using useMemo, useCallback, useRef
// using lazy loading & suspense, fallback
// creating pagination component
// writing prototype of any array predefined function
// use eventlistner , onBlur, onChange, onMouseOut
// setting Route and store, useDispatch, useReducer, useContex
// ________________________________Open Text Ends__________________________________________

// ----------------------------DEFINITIVE HEALTHCARE-----------------------------------
// 40202000

function computeAmount() {
  const obj = {
      result: 0,
      crore : function (val) {
          this.result += val*10000000;
          return this;
      },
      lakhs: function (val) {
          this.result += val*100000;
          return this;
      },
      thousand: function(val) {
          this.result += val*1000;
          return this;
      },
      value: function() {
          return this.result;
      }
  }
  
  return obj;
}

// console.log(computeAmount().crore(2).lakhs(2).crore(2).thousand(3).value());


// const arr = [1, 2, 3, 1, 1, 3, 1, 5, 2, 4, 1];

// // {1: 5}

// function getTheRepetitingValue(arr) {
//     const obj = {};
//     let max = -Infinity;
//     let result = {};
  
//     arr.forEach(item => {
//         let k = (obj[item] ?? 0) + 1;
//         obj[item] = k;
//         if(k > max) {
//             max = k;
//             result = {[item]: k}
//         }
//     });

//     return result;
// }

// console.log(getTheRepetitingValue(arr));

// ------------------------DEFINITIVE HEALTHCARE ENDS-----------------------------------

// Get the count of no of consequtive number in an array
// [88, 3, 54, 2, 87, 65, 1, 4, 86]
// 4

function getConsequtiveCount(arr) {
    let maxCount = -Infinity;
    let count = 0;

    for(let val of arr) {
        let k = val;
        count = 1;

        while(arr.indexOf(k+1) !== -1) {
            count += 1;
            k += 1;
        }

        if(maxCount < count) {
            maxCount = count;
        }
    }

    return maxCount;
}


// second implementation
function getConsequtiveCount2(arr) {
    const numSet = new Set(arr);
    let maxCount = 0, count =0;

    for (let val of arr) {
        if (!numSet.has(val - 1)) {
            count = 1;

            while (numSet.has(val + count)) {
                count += 1;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;
}


// console.log(getConsequtiveCount([88, 3, 54, 2, 87, 65, 1, 4, 86, 5, 85, 84, 83]));

// [88, 3, 54, 2, 87, 65, 1, 4, 86, 5, 85, 84, 83]
// 83-88 - 6
// 1-5 - 5

// ------------------------------------DUBAI Speridian--------------------

// type fruits = [{
//   name: string,
//   price: number,
//   instock: boolean
// }]

// const data:fruits = [
//   {
//     "name": 'apple',
//     "price": 30,
//     "instock": true
//   },
//   {
//     "name": 'banana',
//     "price": 50,
//     "instock": false
//   },
//   {
//     "name": 'orange',
//     "price": 60,
//     "instock": true
//   }
// ]

// export default function App() {
//   return (
//     <div className="App">
//       {data.map(item => (item.instock) ? <p>{`${item.name}: ${item.price}`}</p> : null)}
//     </div>
//   );
// }
// --------------------------------------------------------------------

// -------------------------Dubai Emirates Bank-----------------------------------------

// Debouncing and throttling
// Debouncing is a technique that delays the execution of 
// a function until a certain amount of time has passed since the last time it was called

// Throttling is a technique that limits the number of times a function 
// is called within a certain period of time. This can be useful to prevent 
// a function from being called too frequently, which can cause performance issues or other problems.

// Semantic tags and div and span
// shadow dom
// Difference between Jquery and React dom update method

// Inline and Inline block, block
// How do offline page load happens -- PWA, Service workers, Website caching to local device storage

// -------------------------------------------------------------------------------------------


// ------------------open text 2------------------------------------------------

/* Given a grid of m x n, where each cell in the grid can have one of three values:
0 representing an empty cell,
1 representing a cell that can be traversed,
-1 representing an obstacle that cannot be crossed.

[[1, 0, 0], [1, 1, 0], [1, 1, 1]]

Visualize the grid in a React view.
Each cell is a component that can represent its state (empty, traversable, or obstacle).
Apply different colors or styles for different types of cells for clarity. 

2.Draw paths on the grid.
Create a system to visually differentiate paths from non-paths 
(e.g., highlighted borders or colored lines).

3.Find all possible paths from (0,0) to (m-1,n-1) and highlight them.
Implement an algorithm to find all possible paths without crossing obstacles.
Ensure the path-finding algorithm is efficient to handle larger grids.
Highlight these paths on the grid.
*/

/*

import "./styles.css";
import {useState, useEffect} from 'react';

const data =[
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

const back = (ele) => {
  if(ele === 1) {
    return 'green';
  } else if(ele === -1) {
    return 'red';
  }

  return 'white';
}


export default function App() {

const [connection, setConnection] = useState([]);

const drawConnector = () => {
    let connector = []

    data.forEach((item,i) => 
      item.forEach((ele,j) => {
          if(ele === 1) {
            connector.push([i,j])
          }
      })
    )

    setConnection(connector);
}

useEffect(()=>{
  drawConnector();
  getAllPaths();
}, []);

const colorBorder = (i, j) => {
    if(connection.find(item => item[0]=== j && item[1] === i)) {
      return 'blue';
    }

    return 'white'
}

const getAllPaths = (i=0, j=0, result = [], path=[]) => {
  if(i === data.length-1 && j === data.length-1) {
    if(data[i][j] === 1) {
      path.push([i,j]);
    }
    result.push(path);
    console.log("Result: ", result);
    return result;
  }

  // console.log("data", data);
  if(data[i][j] === 1) {
    path.push([i, j]);
  } else {
    return;
  }

  if(i+1 <= data.length -1) {
    getAllPaths(i+1, j, result, [...path]);
  }
  if(j+1 <= data.length -1) {
    getAllPaths(i, j+1, result, [...path]);
  }

  return;
}

  return (
    <div className="grid">
      {
        data.map((item, i) => 
          item.map((ele, idx) => 
          <div 
            key={idx}
            style={{
              backgroundColor: back(ele),
              border: '0.5px solid #ccc',
              borderColor: colorBorder(idx, i)}}
            >
            {ele}
          </div>)
        )
      }
    </div>
  );
}
*/

// -------------------------------------------------------------------------------------

// ________________________ACCOLITE dIGITAL_____________________________________________

// RPC - remote procedure calling
// full duplex, half duplex
// Clustring in node js
// difference between web sockets and rest api
// ways the UI can communicate to api one is rest api

// 1. Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

// Example: 
// Input: exp = “[()]{}{[()()]()}” 
// Output: Balanced
// Explanation: all the brackets are well-formed

// Input: exp = “[(])” 

// Output: Not Balanced 

// Explanation: 1 and 4 brackets are not balanced because there is a closing ‘]’ before the closing ‘(‘

function bracketComparison(str) {
  const comparator = {
      ']': '[',
      '}': '{',
      ')': '('
  }
  const opening = [];
  for(let k of str) {
      if(!comparator[k]) {
          opening.push(k);
      } else {
          let v = opening.pop();
          if(comparator[k] !== v) {
              return 'Not Balanced';
          }
      }
  }
  
  return opening.length === 0 ? 'Balanced' : 'Not Balanced';
}
// [()]{}{[()()]()}
// console.log(bracketComparison('('));
// console.log(bracketComparison('[(])'));

// ________________________________ENDS_______________________________________________

// ____________________Coonectwise_____________________________________________
// *****
// *   
//   *  
//     * 
// ******


function printPattern() {
  const rows = 5;

  for (let i = 1; i <= rows; i++) {
    let row = '';

    for (let j = 1; j <= rows; j++) {
      if (i === 1 || j===i|| i === rows) {
        //   console.log("hello")
        row += '*';
      } else {
        row += ' ';
      }
    }

    console.log(row);
  }
}

printPattern();