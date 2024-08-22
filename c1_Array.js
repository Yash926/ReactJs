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

//Array.find -prints irst value following the given condition 
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