

//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//Input:[1, 2, 3, 4, 5, 6, 7, 8]
//output:[1,3,5,7]

//In anonymous function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var oddNumbers = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

oddNumbers(numbers);

//IIFE

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);


//b.Convert all the strings to title caps in a string array
// Output: ["Hello World", "Goodbye Moon", "Welcome Back"]
//In anonymous function

var strings = ["hello world", "goodbye moon", "welcome back"];

var titleCaps = function(arr) {
    return arr.map(function(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
};

console.log(titleCaps(strings));


//IIFE

var strings = ["hello world", "goodbye moon", "welcome back"];

(function(arr) {
    var titleCaps = arr.map(function(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
    console.log(titleCaps);
})(strings);

//c.Sum of all numbers in an array
// Output: 15
//In anonymous function

var numbers = [1, 2, 3, 4, 5];
var sumOfNumbers = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(sumOfNumbers(numbers)); 

//IIFE
// Output: Sum: 15
var numbers = [1, 2, 3, 4, 5];
var sum = (function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(numbers);

console.log("Sum:", sum); 


//d.Return all the prime numbers in an array
//In anonymous function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var findPrimes = function(arr) {
  var isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter(num => isPrime(num));
};

console.log("Prime numbers:", findPrimes(numbers)); 
// Output: Prime numbers: [2, 3, 5, 7]

//IIFE

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primes = (function(arr) {
  var isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return arr.filter(num => isPrime(num));
})(numbers);

console.log("Prime numbers:", primes); // Output: Prime numbers: [2, 3, 5, 7]

//e.Return all the palindromes in an array
//output:[ 'level', 'radar', 'madam' ]
// Anonymous Function

var findPalindromes = function(arr) {
    return arr.filter(word => {
        var reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
};

var words = ["level", "hello", "radar", "world", "madam"];
console.log(findPalindromes(words));


// IIFE 
(function(arr) {
    var palindromes = arr.filter(word => {
        var reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
    console.log(palindromes);
})(["level", "hello", "radar", "world", "madam"]);

//f.Return median of two sorted arrays of the same size.
// Anonymous Function
//output:3.5

var findMedian = function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    var n = mergedArray.length;
    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
};

var arr1 = [1, 3, 5];
var arr2 = [2, 4, 6];
console.log(findMedian(arr1, arr2));



// IIFE (Immediately Invoked Function Expression)
(function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    var n = mergedArray.length;
    if (n % 2 === 0) {
        console.log((mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2);
    } else {
        console.log(mergedArray[Math.floor(n / 2)]);
    }
})([1, 3, 5], [2, 4, 6]);


//g.Remove duplicates from an array
//output:[ 1, 2, 3, 4, 5, 6, 7 ]

// Anonymous Function
var removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};

var array = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(array));

// IIFE (Immediately Invoked Function Expression)
(function(arr) {
    var uniqueArray = arr.filter((value, index, self) => self.indexOf(value) === index);
    console.log(uniqueArray);
})([1, 2, 3, 4, 4, 5, 6, 6, 7]);

//h.Rotate an array by k times
//output:[ 3, 4, 5, 1, 2 ]

// Anonymous Function
var rotateArray = function(arr, k) {
    var n = arr.length;
    var rotations = k % n; // handle cases where k is larger than the array length
    var rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
};

var array = [1, 2, 3, 4, 5];
var k = 2;
console.log(rotateArray(array, k));

// IIFE (Immediately Invoked Function Expression)
(function(arr, k) {
    var n = arr.length;
    var rotations = k % n; // handle cases where k is larger than the array length
    var rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);


//2.Do the below programs in arrow functions.
//a.Print odd numbers in an array
//output:1
//3
//5
//7
//9

// Arrow Function
var printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbers(numbers);

//b.Convert all the strings to title caps in a string array
//output:[ 'Hello world', 'This is a tast' ]

// Arrow Function
var convertToTitleCaps = arr => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

var stringArray = ["hello world", "this is a tast"];
var titleCapsArray = convertToTitleCaps(stringArray);
console.log(titleCapsArray);

//c.Sum of all numbers in an array
//output:15

// Arrow Function
var sumOfArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

var numbers = [1, 2, 3, 4, 5];
var sum = sumOfArray(numbers);
console.log(sum);


//d.Return all the prime numbers in an array
//output:[ 2, 3, 5, 7 ]

// Arrow Function
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbersInArray = arr => arr.filter(num => isPrime(num));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = primeNumbersInArray(numbers);
console.log(primeNumbers);


//e.Return all the palindromes in an array
//output:[ 'level', 'prabhu', 'madam' ]

// Arrow Functions
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const palindromesInArray = arr => arr.filter(str => isPalindrome(str));

const words = ["level", "hello", "prabhu", "world", "madam"];
const palindromeWords = palindromesInArray(words);
console.log(palindromeWords);





























