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

let day = prompt('enter the day')

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek day");
}