//Accessing array elements
var num=[1,2,3];
console.log(num[0]);
console.log(num[1]);

//concat method
var num1=[4,5,6];
console.log(num.concat(num1));

//array.from
let name1=Array.from("Lovely");
console.log(name1);

//Array.of
let name2=Array.of(45,12,15,16)
console.log(name2)
console.log(name2.length)

//Array.copywithin
// const num2=[1,2,3,4,5,6,7,8,9,10];
// const num3=[1,2,3,4,5,6,7,8,9,10];
// const num4=[1,2,3,4,5,6,7,8,9,10];
// console.log(num2.copyWithin(2,4,9));//index is the parameter
// console.log(num2.copyWithin(2,4));
// console.log(num2.copyWithin(2));

//Array.find -prints first value following the given condition 
const numbers=[4,9,16,25,29];
let first=numbers.find(myFunction);
function myFunction(value,index,array){
    return value>7;
}
console.log(first)


// Array.entries
var colors=["Red","Yellow","Blue","Black"];
var show =colors.entries();
for(i of show){
    console.log(i);
}

//IndexOf Method

var index=[12,5,8,130].indexOf(130);
console.log("index is:",index);

//map function
var number=[1,4,9];
var roots=number.map(Math.sqrt);
var mult=number.map((i)=>
{
    return i*2;
});
console.log(mult);
console.log("Square roots are: ",roots)

//spread operator
var a=[1,2,3];
var b=[4,5,6];
var c=[7,8,9];
let d=[...a, ...b, ...c];
console.log(d);

//Array.values
var color1=["Red","Yellow","Blue","Black"];
var s=color1.values();
console.log(...s);

//array.fill
var s2=color1.fill("purple",2,4);
console.log(...s2);

//array destructuring
var[c1,c2,c3]=color1;
console.log(c1);
console.log(c2);
console.log(c3);

//array destructuring and rest operator

let [a1,b2,...args]=colors;
console.log(a1);
console.log(b2);
console.log(args);
