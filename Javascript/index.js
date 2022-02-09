var  a;

a=10;
console.log(a);

a="hello";
console.log(a);
// re -initialisation of variable a

//typeof operator -->tells the type of data stored in a variable

console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

// null
a=null;
console.log(a);
console.log(typeof a); 

// string 
// using " ",' ',` `,
// " " and '' have same use but ` ` is used dynamically
var b="hi";
console.log(b);
console.log(typeof b);

var b='hi';
console.log(b);
console.log(typeof b);

var b=`hi`;
console.log(b);
console.log(typeof b);

var str;
str="i am the man with the plan";
console.log(str);

var str;
str="i am the man with the \nplan";
console.log(str);

var str;
str=`i am the man with the 
plan`;
console.log(str);

var num=150;
str=`half of ${num} is ${num/2}`;
console.log(str);

// var has some problems
// 1. redeclaration is allowed

var num=300;
console.log(num);

var num=30;
console.log(num);

// to overcome this problem
// let keyword is used
// let num=100;
// console.log(num);

// let num=50;
// console.log(num);
// error will be there
// therefore,we can't re-declare a variable using let, but not re-initialise it

// loops in js
var num=10;
for(var i=1;i<=num;i++){
    if(i%2==0)
       console.log("even");
    else
       console.log("odd");    
} 

const n1=2;
console.log(n1);
// neither re-declaration nor re-initialisation