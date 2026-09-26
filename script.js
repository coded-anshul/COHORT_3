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

function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(5, 3));   
console.log(calculateArea(10, 4)); 
console.log(calculateArea(7, 2));  //functions