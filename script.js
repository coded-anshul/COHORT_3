// console.log('hello');
// console.warn('hello');
// console.error('hello');
// console.table([10,202,30]);
//alert('heyloo');
//confirm('are you sure?')
//prompt('emter your name ');


// var a   //declaration
// a = 20;
// console.log(a); 

// // data type 
// // - premitive
//     -Number
//     -String
//     -Boolean
//     -undefined
//     -null
//     -BigInt

// // -non premitive

// type coercion
// -implicit
// -explicit

// var a = '10'
//  var b = 20

//  console.log(a*b);


//  var c = 'ashu';
//  var d = Number(c);

//  console.log(d);

// var marks = 100;


// if (marks >= 85) {
//     console.log('A+');
// } else if (marks >= 70) {
//     console.log('B+');
// } else if (marks >= 50) {
//     console.log('C+');
// }
// else if (marks >= 33) {
//     console.log('D');
// } else {
//     console.log('Fail');
// }

// console.log(10>9?'hello':'bye');

// let day = prompt('enter the day')

// switch (day) {
//     case "Monday":
//         console.log("Start of the week");
//         break;
//     case "Friday":
//         console.log("Weekend coming!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Midweek day");
// }


// console.log("if ke pehle ");
// if (10>5){
//     console.log("if is running");
// }
// console.log("if ke baad mai ");

// var num = Number(prompt("enter the number"));
// var a  = 1;
// while(a<=10){
//     console.log(num*a)
//     a++;
// }

// do{
//     var pass= prompt("enter the password");

// }while(pass!='123');

// console.log("welcome!   ")

// var name = "jay"
// var gender = "male"

// console.log(`hero ka naam ${name} hai aur gender ${gender} hai`);

// let s = "Hello, World!";

// console.log(s.length);              // 13
// console.log(s.toUpperCase());       // "HELLO, WORLD!"
// console.log(s.toLowerCase());       // "hello, world!"
// console.log(s.indexOf("World"));    // 7  (position of "World")
// console.log(s.includes("Hello"));   // true
// console.log(s.slice(0, 5));         // "Hello"
// console.log(s.substring(7, 12));    // "World"
// console.log(s.replace("World", "JS"));   // "Hello, JS!"
// console.log(s.split(", "));         // ["Hello", "World!"]
// console.log("   hi   ".trim());     // "hi"
// console.log("abc".repeat(3));       // "abcabcabc"
// console.log(s.startsWith("Hello")); // true
// console.log(s.endsWith("!"));       // true
// console.log(s.charAt(0));           // "H"
// console.log(s[0]);                  // "H" (also works)

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// function calculateArea(length, breadth) {
//     return length * breadth;
// }

// console.log(calculateArea(5, 3));   
// console.log(calculateArea(10, 4)); 
// console.log(calculateArea(7, 2));     

// function greet (num){
//     console.log("good evening",num);
// }



// function add (a,b){
//     console.log(a+b);
// }
// function mul (a,b){
//     console.log(a*b);
// }
// function sub (a,b){
//     console.log(a-b);
// }
// add(10,20);
// mul(10,20);
// sub(10,20); 

// function greet (user,age){
//     console.log("good morning ", user);
//     if (age >=18){
//         console.log("YOU ARE WELCOME");
//     }else{
//         console.log("get the fuck outta here");
//     }
// }

// greet("deepak",15);
// var a = function(){
//     console.log("hello guys1");
// }

// var b = function(){
//     console.log("hello guys 2");
// }
// a();
// b();

// var a = ()=>{
//     console.log("hello guys ");
// }
// a();

// (function(){
//     console.log("this is IIFE");
// })()

//check


// arr = [1,2,3,4]

// arr.push(5)       //last mai elemet add
// console.log(arr);

// arr.pop()           //last se remove
// console.log(arr);

// arr.unshift(1)          // st se add
// console.log(arr);

// arr.shift()          //st se remove
// console.log(arr);


// var arr = [1,2,3,4,5];

// arr.splice(0,0);
// console.log(arr);

// arr.splice(2,3,10);
// console.log(arr);

// var arr =[
//     [1,2,3,4,5],
//     [10,20,30,40,50],
//     [100,200,300,400,500]
// ]
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// arr.sort((a,b)=>a-b);  //used in more than 2 digit cz of sort treats elemst as string

// var arr = [1,2,3,4];

// for (var a = 0; a<(arr.length);a++){
//     console.log(a);
// }
// var arr = [1,2,3,4]
// for (value of arr){
//     console.log(value);
// }

// var arr = [];

// for (var a = 1; a<=100 ; a++){
//     if(a%2==0){
//         arr.push(a);
//     }
// }
// console.log(arr);

//   let arr = [1, 2, 3, 4, 5];

// arr.slice(1, 4);              // [2, 3, 4]  (original unchanged)
// arr.concat([6, 7]);           // [1, 2, 3, 4, 5, 6, 7]
// arr.includes(3);              // true
// arr.indexOf(3);               // 2
// arr.indexOf(99);              // -1 (not found)
// arr.join("-");                // "1-2-3-4-5"



//forEach - iteration
//map - transform 
//filter - filter
// reduce - reduce

// var arr = [1,3,4,5]

// arr.forEach(function(){
//   console.log('hello');
// })


// let run = () => {
//   console.log("hello");
// }
// arr.forEach(run);

// var arr = [1,3,4,5]

// arr.forEach(function(ele,ind){
//   console.log(ele,ind);
//  })
// var a = 0 ;
// arr.forEach(function(elem){
  
//   a = a + elem;
// })
// console.log(a);


// var squ = [ ];
// arr.forEach(function(elem){
//   squ.push(elem*elem);

// })
// console.log(squ);



// var arr2 = arr.map(function(elem){
//   return elem*elem;

// })
// console.log(arr2);

// var arr = [1,2,3,4,-2]

// var arr2 = arr.filter(function(elem){
//   return elem>0;
// })

// console.log (arr2);

// var arr = [100,200,300]

// var sum = arr.reduce(function(acc,val){
//   return acc + val
// })
// console.log(sum);


// var arr = ['apple','banana','apple','mango']

// var abc = arr.reduce((acc,val)=>{
//   acc[val] = (acc[val] || 0) + 1;

//   return acc
// },{})
//   console.log(abc);


// var arr = [1,2,3,4,5,6]
// var sum = 0
// arr.reduce(function(acc,val){
//   sum = sum + val;
// },0);

// console.log(sum);
//  var arr = [1,2,3,4,5,6]

//  var ans = arr.reduce(function(acc,val){
//   if(val>acc){
//     return val;
//   }else{
//     return acc;
//   }
//  },0)

//  console.log(ans); 

// var arr = [ 2,3,2,4,5,65,200,72]

// var ans = arr.findIndex(a=>a%10==0);
// console.log(ans);

var arr = ['ansh','kinj','pranj']

var a = arr.find(a=>a.includes('a'))

console.log(a);
