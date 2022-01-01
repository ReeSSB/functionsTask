"use strict();"
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of same size
// Remove duplicates from an array
// Rotate an array by k times




const numArray = [1, 23, 45, 22, 34, 36, 34, 32, 67, 09, 09, 56, 78, 57, 89, 34, 59, 88, 99, 36, 78];



//PRINT ODD NUMBER in IN AN ARRAY
console.log("PRINT ODD NUMBER in IN AN ARRAY--------------------");

const oddNumArray = [];
const odd = numArray.filter(n => n % 2);
const oddArray = oddNumArray.push(odd);

console.log(odd);
console.log(oddNumArray);


//CONVERT ALL STRNGS TO TITLE CASE IN AN ARRAY
console.log("CONVERT ALL STRNGS TO TITLE CASE IN AN ARRAY-------");


let strArray = ['ram', 'shyam', 'shashi', 'bhushan', 'india'];

const title = array => {
      const newArray = array.reduce((acc, item) => {
            let letters = item.split("");
            letters[0] = letters[0].toUpperCase();
            return acc.concat(letters.join(""));
      }, []);
      return newArray;
};

console.log(title(strArray));


//SUM ALL NUMBER IN AN ARRAY
console.log("SUM ALL NUMBER IN AN ARRAY----------------------------");


let num = n => isNaN(n) ? 0 : n;
const sumOfArray = numArray.reduce((a, b) => num(a) + num(b));

console.log(sumOfArray);



//RETURN ALL PRIME NUMBER IN AN ARRAY
console.log("RETURN ALL PRIME NUMBER IN AN ARRAY--------------------");


const primeNumArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
      }
      return true;
});

console.log(primeNumArray);



//ALL PALINDROMES IN AN ARRAY
console.log("ALL PALINDROMES IN AN ARRAY-----------------------------");


const arr = ["civic", "hello", 99, 6556, 567]

/*
SIMPLE PALINDROME CHECKER FOR WORDS
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(arr));
*/

const isPalindrome = el => {
      const str = String(el);
      let i = 0;
      let j = str.length - 1;
      while (i < j) {
            if (str[i] === str[j]) {
                  i++;
                  j--;
            } else {
                  return false;
            }
      }
      return true;
};
const findPalindrome = arr => {
      return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

//MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE
console.log("MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE-----------------");

function getMedian(ar1, ar2, n) {
      let i = 0;
      let j = 0;
      let count;
      let m1 = -1,
            m2 = -1;

      for (count = 0; count <= n; count++) {
            if (i == n) {
                  m1 = m2;
                  m2 = ar2[0];
                  break;
            } else if (j == n) {
                  m1 = m2;
                  m2 = ar1[0];
                  break;
            }
            if (ar1[i] <= ar2[j]) {
                  m1 = m2;
                  m2 = ar1[i];
                  i++;
            } else {
                  m1 = m2;
                  m2 = ar2[j];
                  j++;
            }
      }

      return (m1 + m2) / 2;
}

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2) {
      console.log("Median is " + getMedian(ar1, ar2, n1));
} else {
      console.log("Doesn't work for arrays of unequal size");
}



//REMOVE DUPLICATES FROM AN ARRAY
console.log("REMOVE DUPLICATES FROM AN ARRAY-------------------------");


let dupArray = ['Array', 'function', 'CSS', 'function', 99, 12, 16, 12];
let uniqArray = [...new Set(dupArray)];

console.log(uniqArray);


//ROTATE AN ARRAY BY K times
console.log("ROTATE AN ARRAY BY K times-------------------------------");

function RightRotate(a, n, k) {

      k = k % n;

      for (let i = 0; i < n; i++) {
            if (i < k) {

                  console.log(a[n + i - k] + " ");
            } else {

                  console.log((a[i - k]) + " ");
            }
      }
}

let arrayyy = [1, 2, 3, 4, 5];
let N = arrayyy.length;
let K = 6;

RightRotate(arrayyy, N, K);