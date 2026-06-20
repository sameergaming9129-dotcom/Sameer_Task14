// sum of first n number
let nForSum = 5; 
let totalSum = 0;
for (let i = 1; i <= nForSum; i++) {
    totalSum += i;
}
console.log("Sum of first n number is ", totalSum);

// Table of n

// let n = 9;
// for (let i = 1; i <= 10; i++) {
//     console.log(n + "x" + i + "=" + (n*i));
// }


// Prime Number Check
let n = 152;
let isPrime = true;
if(n <= 1) {
    isPrime = false;
} 
else{
    for(i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("Is Prime Number", isPrime)


// Factor of number

// let n = 150;
for (let i = 1; i <= n; i++) {
    if(n % i === 0) {
        console.log(i);
    }
}
console.log("Factors of ", n);

// 5. 

let temp = n; 
let digitSum = 0;

while(temp > 0) {
    let digit = temp % 10;
    digitSum += digit;

}

console.log("Sum of Digits =", digitSum);


// arm strong number

temp = n;

let armstrongSum = 0;

while(temp > 0){

    let digit = temp % 10;

    armstrongSum += digit ** 3;

    temp = Math.floor(temp / 10);
}

if(armstrongSum === n){
    console.log(n, "is an Armstrong Number");
}
else{
    console.log(n, "is NOT an Armstrong Number");
}
