
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










































