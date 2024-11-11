//String Manipulation Functions:


//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
//count characters
function countCharacters(str) {
    return str.length;
}
//Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')  // divise la phrase
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // le preier leetre en majuscule
        .join(' ');  
}

//Array Functions:

//max min
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
//somme
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
//filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

//Mathematical Functions:


//Factorial

let n = 6; 

function factorial(n) { 
    let a = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        a = a * i; 
    return a; 
}
//Nb primaire
function isPrime(num) {
    if (num <= 1) {
        return false;  
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  
        }
    }

    return true;  

}
//fibonacci
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}