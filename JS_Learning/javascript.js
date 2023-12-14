// -------------------------------------------1-------------------------------------------------------
// foo();
// bar();

function foo() {
    console.log("Foo called");
}

const bar = () => {
    console.log("Bar called!");
}

// -----------------------------------------------------2--------------------------------------------
// return both value
function tw() {
    return 10;
    return 20;
}
// console.log(tw());

function* two() {
    yield 10;
    yield 20;
}

// const res = two();
// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next());

// --------------------------------------------3-------------------------------------------

const person = {
    name: "Prabhat",
    age: 20
}

// output  [["name","Prabhat"], ["age", 20]]

// console.log(Object.entries(person));

// -----------------------------------------------------------------------------
// implementatioin of useState

// function createCounter(x) {
//     let count = x;

//     function increment(v) {
//         if (typeof v === 'function') {
//             count += v(count);
//         } else {
//             count += v;
//         }
//         return count;
//     }

//     return [count, increment];
// }

// const [a, b] = createCounter(8);

// console.log(a); // Output: 8
// console.log(b((prev)=> prev-5 )); // Output: 11
// console.log(a); // Output: 8

// -----------------------------------------------5-------------------------------------------

/* Certainly! Here are some tricky JavaScript interview questions that can help you test a candidate's deeper understanding of the language:

1. **What is the output of this code?**
   ```javascript
   console.log(1 + '1' - 1); 

   Solution: '11' - 1 => 10
   ```

2. **Explain the concept of closures in JavaScript.**

3. **What is the difference between `let`, `const`, and `var` in JavaScript?**

4. **What is a promise in JavaScript? How does it differ from a callback?**

5. **Explain event delegation in JavaScript.**

 ----> Event delegation is a technique in JavaScript where you attach an event listener to a 
 higher-level element, instead of attaching it to multiple individual child elements. 
 This allows you to manage events efficiently, especially in situations where you have a large
  number of elements that need the same event handling.

6. **What is the output of this code?**
   ```javascript
   for (var i = 0; i < 5; i++) {
     setTimeout(() => console.log(i), 1000);
   }
   ```
   -----------> It will print 5 five times.

7. **What is the output of this code?**
   ```javascript
   let x = 10;
   setTimeout(() => {
     console.log(x);
   }, 0);
   x = 20;

   ------> It will print 20
   ```

8. **What is the purpose of the `bind()` function in JavaScript?**

9. **Explain the difference between `==` and `===` in JavaScript.**

10. **What is a callback hell, and how can it be avoided?**

11. **What is memoization in JavaScript?**

12. **What is the difference between synchronous and asynchronous code in JavaScript?**

13. **Explain the difference between function declaration and function expression.**

14. **What is the purpose of the `use strict` directive in JavaScript?**

15. **What is a closure and how might you use it to create private variables in JavaScript?**

16. **What is the significance of the `this` keyword in JavaScript?**

17. **What is a generator in JavaScript? How is it different from a regular function?**

18. **Explain the concept of hoisting in JavaScript.**

19. **What is the event loop in JavaScript?**

20. **What is the output of this code?**
    ```javascript
    console.log([] == ![]);
    ```

These questions cover a range of JavaScript concepts, from closures and promises to scope and variable declaration. 
They should help you gauge a candidate's depth of understanding and problem-solving abilities in JavaScript. Keep in mind that it's important to follow up on their answers with additional questions or ask for explanations to ensure a thorough understanding.
*/

// To achieve the desired result, we can modify the code to find the smallest substring containing the target string. Here's the modified JavaScript code:

function smallestSubstringContaining(mainString, targetString) {
    let minLength = Infinity;
    let minSubstring = '';

    for (let i = 0; i < mainString.length; i++) {
        for (let j = i + 1; j <= mainString.length; j++) {
            const substring = mainString.substring(i, j);

            if (containsAllChars(substring, targetString) && substring.length < minLength) {
                minLength = substring.length;
                minSubstring = substring;
            }
        }
    }

    return minSubstring;
}

function containsAllChars(substring, targetString) {
    for (let char of targetString) {
        if (!substring.includes(char)) {
            return false;
        }
    }
    return true;
}

// const mainString = "Welcome to programming";
// const targetString = "mog";

// const result = smallestSubstringContaining(mainString, targetString);
// console.log(result); // Output: "me to prog"


// find all anagrams of a given string

function getAllAnagrams(str) {
    if (str.length === 1) return [str];
    let anagrams = [];

    const smallerAnagrams = getAllAnagrams(str.slice(1));

    for (let i = 0; i < smallerAnagrams.length; i++) {
        for (let j = 0; j <= smallerAnagrams[i].length; j++) {
            const a = smallerAnagrams[i].slice(0, j) + str[0] + smallerAnagrams[i].slice(j);
            anagrams.push(a);
        }
    }

    return anagrams;
}

// console.log(getAllAnagrams('abcde'));

// Write a program to find the smallest substring present in a given string which contains the target string

function checkforChar(s, target) {

    for (let i = 0; i < target.length; i++) {
        if (!s.includes(target[i])) {
            return false;
        }
    }

    return true;
}

function smallestSubString(str, target) {
    // "Welcome to the programming"
    // mog
    // me to the prog
    let smallstr = Infinity;
    let minSubstring = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let s = str.substring(i, j);
            if (checkforChar(s, target) && s.length < smallstr) {
                smallstr = s.length;
                minSubstring = s;
            }
        }
    }

    return minSubstring;
}

// console.log(smallestSubString('I am the greatest', 'Imt'));

// Find the maximum sum of a subarray of a fixed size k within a given array.
// const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
// const k = 3;
// const result = maxSubarraySum(arr, k);
// console.log(result); // Output: 16 (Subarray: [7, 8, 1])

function getSum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }

    return s;
}

function maxSum(arr, k) {
    let maxsum = -Infinity;
    let subArray = [];

    for (let i = 0, j = k; j < arr.length; i++, j++) {
        let sum = getSum(arr.slice(i, j));
        if (sum > maxsum) {
            maxsum = sum;
            subArray = arr.slice(i, j);
        }
    }

    return subArray;
}

// console.log(maxSum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));


// Write a program to find Longest Substring and it's length Without Repeating Characters in a given string
// abcabcbb ---> abc --> 3

function duplicateChecker(str) {
    let obj = {};

    for (char of str) {
        // obj[char] = (obj[char] && obj[char] + 1) ||  1;
        obj[char] = (obj[char] ?? 0) + 1;
        if (obj[char] > 1) return false;
    }

    return true;
}

function longSubstringWithoutCharRepeat(str) {

    let largestSubStrLen = -Infinity;
    let largestSubStr = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let s = str.substring(i, j);

            if (duplicateChecker(s) && largestSubStrLen < s.length) {
                largestSubStrLen = s.length;
                largestSubStr = s;
            }
        }
    }

    return largestSubStr;
}

// console.log(longSubstringWithoutCharRepeat('pwwkew'));

// Opening and closing bracket
// "{[()]}"

function bracketComparison(str) {
    const stack = [];
    const matcher = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (s of str) {
        if (['(', '{', '['].includes(s)) {
            stack.push(s);
        } else if (matcher[stack.pop()] !== s) {
            return false;
        }
    }

    return stack.length === 0;
}

// console.log(bracketComparison('{[({{{()}}}])]}'));

// **Longest Palindromic Substring**: Given a string, find the longest palindromic substring.

// Input: "madamnoonraceca"
// Output: "madam"

// Input: "madamnoonracecar"
// Output: "racecar"

function PalindromeCheck(str) {
    return str === str.split('').reverse().join('');
}

function longestPalindromeSubstring(str) {
    let longest = -Infinity;
    let longSubStr = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.substring(i, j);
            if (PalindromeCheck(substring) && substring.length > longest) {
                longest = substring.length;
                longSubStr = substring;
            }
        }
    }

    return longSubStr;
}

// console.log(longestPalindromeSubstring('abcde'));


// [[75, 76, 65, 87, 87], [78, 76, 68, 56, 89], [67, 87, 78, 77, 65]]
// 3 students and 5 subjects
// drop the subject which has lowest class average

// output sum after drop [325, 299, 296]

function getFinalSumAfterDrop(arr, students, subjects) {
    let lowestSum = Infinity;
    let dropIndex = 0;
    const totalsumarr = [];

    for (let i = 0; i < subjects; i++) {
        let s = 0;
        for (let j = 0; j < students; j++) {
            s += arr[j][i];
            if (lowestSum > s) {
                lowestSum = s;
                dropIndex = i;
            }
        }
    }

    for (let i = 0; i < students; i++) {
        let s = 0;
        for (let j = 0; j < subjects; j++) {
            if (j !== dropIndex) {
                s += arr[i][j];
            }
        }
        totalsumarr.push(s);
    }

    return totalsumarr;
}

// console.log(getFinalSumAfterDrop([[75, 76, 65, 87, 87], [78, 76, 68, 56, 89], [67, 87, 78, 77, 65]], 3, 5));

// Write a program to find all Tprime which has only 3 divisor unlike prime has only 2 divisor

function checkTPrime(n) {
    if (n <= 3) return "Not a TPrime";
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count += 1;
        }
        if (count > 3) return 'Not a TPrime'
    }

    return count === 3 ? "Tprime" : "Not a TPrime";
}

// console.log(checkTPrime(9));


// if a corresponding closing tag is present then return true else return the tag which is not closed
// "<div><div><b><p></p></b></div>"
// "<div><div><b><p></p></b></div></div>"
// "<div><div><b><p></p></b></div></div></div>"
// all tags have closing tags
// a tag does not have closing tag
// a closing tag does not have opening tab in taht case return the opening tag


// solution 1
function checkHtmlTags(str) {
    const tags = [];

    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] === '>') {
            tags.push(str.substring(j, i + 1));
            j = i + 1;
        }
    }

    let tlen = tags.length;

    for (let i = 0; i < tlen / 2; i++) {
        let lastTag = tags.pop();
        if (tags[i].slice(1) !== lastTag.slice(2)) {
            return tags[i];
        }
    }

    return true;
}

// solution 2
function checkHtmlTags2(str) {
    const tags = [];
    const regex = /<[^>]*>/g;
    let match;

    while (match = regex.exec(str)) {
        tags.push(match[0]);
    }

    let tlen = tags.length;

    for (let i = 0; i < tlen / 2; i++) {
        let lastTag = tags.pop();
        if (tags[i].slice(1) !== lastTag.slice(2)) {
            return tags[i];
        }
    }

    return true;
}

// console.log(checkHtmlTags('<div><div><b><p></p></b></div></div></div>'));


// console.log(checkHtmlTags2('<div><div><b><p></p></b></div>'));

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitive values and null as they do not need cloning
    }

    if (Array.isArray(obj)) {
        let newArr = [];
        for (let i = 0; i < obj.length; i++) {
            newArr[i] = deepClone(obj[i]); // Recursively clone array elements
        }
        return newArr;
    }

    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]); // Recursively clone object properties
        }
    }

    return newObj;
}


// polyfill of arr.reduce function


Array.prototype.myReduce = function (fn, initial) {
    let values = this;

    values.forEach(item => {
        initial = initial !== undefined ? fn(initial, item) : item
    })

    return initial;
}


// Minimum window approach

function checkSubstr(str, target) {
    const strcount = {};
    const targetcount = {};
  
    for(let item of str) {
      strcount[item] = (strcount[item] ?? 0) + 1;
    }
  
    for(let item of target) {
      targetcount[item] = (targetcount[item] ?? 0) + 1;
    }
  
    return Object.keys(targetcount).every(item => strcount[item] >= targetcount[item])
  }
  
  function MinWindowSubstring(strArr) { 
    const str = strArr[0];
    const target = strArr[1];
  
    let left = 0, right = str.length
    while(left < right) {
      const s1 = str.slice(left, right);
      const s2 = str.slice(left-1, right);
  
      if(checkSubstr(s1, target)) {
        left += 1;
      } else if(checkSubstr(s2, target)) {
        right -= 1;
      } else {
        return str.slice(left-1, right+1);
      }
    } 
    return  strArr;
  }

//   console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // aksfaje


// ----------------------------- Infinite -----------------------------------
// console.log(a); // undefined
// var a= 9;
// function Foo()
// {  console.log(a); // undefined / 9
//   var a = 99;
//   console.log(a); // 99 / 9
// }
// Foo();
// console.log(a); // 9

// this 

// () => {}

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo); // bar
//         console.log("outer func:  self.foo = " + self.foo); // bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo); // undefined
//             console.log("inner func:  self.foo = " + self.foo); // bar
//         }());
//     }
// };
// myObject.func();

// var a;

// null & undefined

// const obj = {
// 	name: "abs",
// 	age: 30
// }

// const { name: firstname} = obj
// func ({ name, age})


// console.log("Good morning1"); // 
// setTimeout(function () {
//   console.log("Good morning2");
// }, 1000);
// console.log("Good morning3"); //


// gm1


// Promise

// ---------------------------------------------------------
// useEffect(()=>{}, [])
// useEffect(()=>{}, [])
// useEffect(()=>{
// return () => {}
// }, []);

// CODING
// Import stylesheets
// import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
// const flatten = (array) => {
//   // throw new Error('Put your solution here');
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       result.push(array[i]);
//     } else if (Array.isArray(array[i])) {
//       let smallerRes = flatten(array[i]);
//       result.push(...smallerRes);
//     }
//   }

//   return result;
// };
// const data = [1, 2, [3, 4, [5]]];
// console.log(flatten(data)); // [1, 2, 3, 4, 5]

// _______________________________INFINITE ENDS___________________________________________



