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

// var arr = ['ansh','kinj','pranj']

// var a = arr.find(a=>a.includes('a'))

// console.log(a);

// var a = {
//     name : 'ashu',
//     age : 20,
//     city : 'delhi'
// }
// console.log(a.name);
// console.log(a.age); 

// var a = {
//     name : 'ashu',
//     age : 20,
//     city : 'delhi'
// }

// console.log(a.name);


// a.marks = 100;
// console.log(a);

// delete a.age;
// console.log(a);

// var a = {
//     name : 'ashu',
//     age : 20,
//     city : 'delhi'
// }

// var b = Object.keys(a);
// console.log(b);
// var c = Object.values(a);
// console.log(c);


// var maths ={
//     add:(a,b)=>{
//         return a+b;
//     },
//     cube:(a)=>{
//         return a*a*a;
//     },
//     square:(a)=>{
//         return a*a;
//     },
//     multiply:(a,b)=>{
//         return a*b;
//     },
// }

// console.log(maths.add(10,20));
// console.log(maths.cube(10));
// console.log(maths.square(10));
// console.log(maths.multiply(10,20));


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
// }


// object.seal(person);
// object.freeze(person);

// function sum(...numbers) {
//     let total = 0;
//     for (let n of numbers) {
//         total += n;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));         
// console.log(sum(1, 2, 3, 4, 5, 6)); 

// let arr = [10, 20, 30]
// // Old way
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// // New way
// let [x, y, z] = arr;
// console.log(x, y, z);   
// var obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     sayhi:function(){
//         console.log(this);
//     }
// }
// obj.sayhi();

// var obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     sayhi:()=>{
//         console.log(this);
//     }
// }
// obj.sayhi();

// var obj = {
//     name: 'John',
//     age: 30,
//     getCompany: function() {
//         const companyName={
//             name: 'TechCorp',
//             isGood: true,
//             greet: function() {
//                 console.log(this.name);
//             }
//         };
//         companyName.greet();
//     }
// };

// obj.getCompany()

// jab arrow function ke andar this use karte hai to this ka reference parent object ko point karta hai na ki current object ko
//jab normal function ke andar this use karte hai to this ka reference current object ko point karta hai na ki parent object ko

// var student1 = {
//     firstName: 'John',
//     lastName: 'Doe',
// }
// var student2 = {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     // getIntro:function() {
//         //     console.log(this.firstName + ' ' + this.lastName);
//         // }
// }
// var getIntro=function() {
//      console.log(this.firstName + ' ' + this.lastName);
// }

// // student1.getIntro.call(student2); // Output: Jane Smith
// // // The call() method allows us to invoke the getIntro method of student1, but with the context of student2.
// // student1.getIntro.apply(student2); // Output: Jane Smith
// // // The apply() method works similarly to call(), but it takes an array of arguments instead of individual arguments.
// // student1.getIntro.bind(student2)(); // Output: Jane Smith
// // // The bind() method creates a new function with the context of student2, which we can then invoke.

// getIntro.call(student1); // Output: John Doe
// getIntro.call(student2); // Output: Jane Smith

// getIntro.apply(student1); // Output: John Doe
// getIntro.apply(student2); // Output: Jane Smith

// getIntro.bind(student1)(); // Output: John Doe
// getIntro.bind(student2)(); // Output: Jane Smith


// var student1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     maths: 90,
//     computer: 85,
// }
// var student2 = {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     maths: 88,
//     computer: 92,
// }
// var student3 = {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     maths: 95,
//     computer: 80,
// }

// var getResults = function(){
//     console.log(this.firstName + ' ' + this.lastName + ' scored ' + this.maths + ' in Maths and ' + this.computer + ' in Computer.');
// }

// getResults.call(student1); // Output: John Doe scored 90 in Maths and 85 in Computer.
// getResults.call(student2);
// getResults.call(student3);


//  var student1 = {
//     firstName: 'John',
//     lastName: 'Doe',

//     getIntro: function(city) {
//         console.log(this.firstName + ' ' + this.lastName + ' ' + city);
//  }}

//   var student2 = {
//     firstName: 'jane',
//     lastName: 'Smith',
//  }
//  var student3 = {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//  }

//  student1.getIntro.call(student2,'delhi'); // Output: John Doe scored 90 in Maths and 85 in Computer.
//  student1.getIntro.apply(student3,['mumbai']); 

//  var out = student1.getIntro.bind(student2,'kolkata');
//  out();



// var arr = [1,2,3,4,5]
// var obj = {
//     name:'ashu',
//     age:20,
//     city:'delhi'
// }

// console.log(arr.__proto__ );
// console.log(obj);


// var college = {
//     name: 'ABC College',
//     rating: 4.5,
//     students: 5000,
//     saySlogan: function() {
//         console.log("Education for all!");
//     }   
// }
// var branch = {
//     name: 'Computer Science',
//     rating: 4.8,
//     students: 2000,
//     subjects: ['Programming', 'Data Structures', 'Algorithms'],

// }

// var user = {
//     name: 'John Doe',
//     age: 20,
//     marks: 85,
// }

// user.__proto__ = branch;
// branch.__proto__ = college;


// function createBook(title, author, page) {
//     this.title = title;
//     this.author = author;
//     this.page = page;   
//     this.getFrontpage=function() {
//         console.log('Book name -' , this.title);
//         console.log('Author name -' , this.author);
//         console.log('Total pages -' , this.page);
//     }
        
// }

// let book1 = new createBook('book1', 'author1', 100);
// let book2 = new createBook('book2', 'author2', 200);


// // console.log(book1);
// // console.log(book2);

// book1.getFrontpage();

// function MakeStudent(fname,lname,contact,isverified){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isverified = isverified;
//     this.showProfile = function(){
//         if (this.isverified){
//             console.log(`first name is ${this.fname} last name is ${this.lname} contact is ${this.contact} isverified ${this.isverified}`)
//         }else{
//             console.log("your account is not verified");
//     }
//     }
// }


// let s1 = new MakeStudent('ashu','kumar',1234567890,true);
// let s2 = new MakeStudent('deepak','ojha',1234567890,false);
// let s3 = new MakeStudent('anurag','kumar',1234567890,true);
// let s4 = new MakeStudent('deepesh','tak',1234567890,false);


// s2.showProfile();

// class MakeStudent{
//     constructor(fname,lname,contact,isverified){
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isverified = isverified;
//     }

//     showProfile = function(){
//         if (this.isverified){
//             console.log(`first name is ${this.fname} last name is ${this.lname} contact is ${this.contact} isverified ${this.isverified}`);
//         } else {
//             console.log("your account is not verified");
//         }
//     }
// }
 

// let s1 = new MakeStudent('ashu','kumar',1234567890,true);
// let s2 = new MakeStudent('deepak','ojha',1234567890,false);
// let s3 = new MakeStudent('anurag','kumar',1234567890,true);
// let s4 = new MakeStudent('deepesh','tak',1234567890,false); 

// console.log(s1);

// let dada= {
//     fname:'ram',
//     lname:'kumar',
//     land: 'ram land',
// }

// let papa = {
//     fname:'ashu',
//     lname:'kumar',
//     shop:'ashu store',
// }
// papa.__proto__ = dada;

// let beta = {
//     fname:'deepak',
//     lname:'ojha',
// }

// beta.__proto__ = papa;

// console.log(beta.shop);
// console.log(papa.land);
// console.log(beta.land); 


//  class user {
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
//     greetUser(){
//         console.log(`hello ${this.fname} ${this.lname}`); 
//     }
//  }

//  class Admin extends user{
//     constructor(fname,lname){
//         super(fname,lname);
//         this.Accessadmin = true;

//     }
//     addCourse(){
//         console.log('course added');
//     }
//     removeCourse(){
//         console.log('course removed');
//     }
//  }

//  var a1 = new user('ashu','kumar');
//  var a2 = new Admin('deepak','ojha');
//  a1.greetUser();
//  a2.greetUser();
//  a2.addCourse();
//  a2.removeCourse();
//  a1.addCourse();


//   console.log('start');

  
//   setTimeout(function x(){
//       console.log('this is set timeout');
//     },2000);
    
//   console.log('end');
    //set timeout is used to run a function after a certain delay


// document.querySelector('h1').addEventListener('click',function(){
//     console.log('hello');
// });

// console.log('start');

// setTimeout(function x(){
//     console.log('this is set timeout');
// },0);

// console.log('end');


// async function dataLao(){
//     let response =await fetch('https://picsum.photos/v2/list');
//     let data = await response.json();
//     console.log(data);
// }

// dataLao();

// let p1 = new Promise(function(resolve,reject){
//     let val = true;
//     if (val){
//         console.log('this is resolved');
//     } else {
//         console.log('this is rejected');
//     }
// });


// let p1 = new Promise(function(resolve,reject){
//     console.log('promise pendaing hai ');

//     let result = false 

//     setTimeout(function(){
//         if (result){
//             console.log('Full filled');

//             resolve()
//         }else{
//             console.log('rejected');
//             reject()
//         }
//     },3000)
// })

// p1.then(function(){
//     console.log('promise is fullfilled');
// })
// .catch(function(){
//     console.log('promise is rejected');
// })
// .finally(function(){
//     console.log('promise end ');
// })

// function orderFood(){
//     let myOrder = new Promise (function(resolve,reject){
//         console.log('order is coming');

//         let orderStatus = true;
//         setTimeout(function(){
//             if (orderStatus){
//                 resolve();
//             }else{
//                 reject();
                
//             }
//         },3000)
//     })

//     myOrder.then(function(){
//         console.log('bhaiya aaygye hai ');
        
//         let paymentStatus = false;
//         return new Promise(function (res,rej){
//             setTimeout(function(){
//                 if(paymentStatus){
//                     res()
//                 }else{
//                     rej()
//                 }
//             },2000)
//         })
//     })
//     .then (function(){
//         console.log("nacho");
//     })
//     .catch(function(){
//         console.log("order failed");
//     })
// }

// orderFood();

// let response = fetch('https://fakestoreapi.com/products')

// response.then(function(){
//     console.log('data aagya ');
//     console.log(data);
    
// })

// .catch(function(){
//     console.log('data nahi aya');
    
// })

// console.log(window.document);

//selection of an element 


//only sleects first h1 tag
// const h1 = document.querySelector('h1');

//for selectin all tags
// const h1 = document.querySelectorAll('h1');
// console.log(h1);


// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// const box = document.querySelector('#box');
// box.innerHTML = "hellooooooooo0";

// document.body.innerHTML = "checkinggg";


// text change = 

// --- textContent -> only changes or update text
// --- innerText ->poora structure ud jayega
// --- innerHTML -> pooora structure ud jayega


//nodelist- sabhi chezo ko node mai count karta hai 
// sabhi cheeze matlab blank space , white space , line break 

//Html collection - sirf html elemtns

// const body = document.body;
// console.log(body.childNodes);
// console.log(body.children);

// const h1 = document.querySelector('h1');

// h1.textContent = "I have been changed by DOM";
// // console.log(h1);


// const isClass = h1.classList.contains('heading');
// console.log(isClass);


// h1.classList.toggle('headingg');
// h1.classList.toggle('headingg');

// const bulb = document.querySelector('.bulb');

// const button = document.querySelector("button");
// let flag = true;
// button.addEventListener('click', function(){
//     if (flag){
//         bulb.style.backgroundColor = 'Yellow';
//         button.textContent = 'off';
//         flag = false;
//     }else{
//         bulb.style.backgroundColor = 'white';
//         button.textContent = 'on';
//         flag = true;
//     }
// })

// attributes and properties 
// -set attributes , getAttribute , removeAtribute , hasAttribute
// - with data -* name 
// - Input . value(property , current state ) vs input . getattribute ('value')

// const h3 = document.querySelector('#id1');

// let res = h3.getAttribute("class");
// h3.setAttribute("width","200");

// console.log(h3.getAttribute("width") );
// h3.removeAttribute("width");

// console.log(res);

// console.log(h3.hasAttribute("width"));

// const userCard = document.querySelector("#user_card");
// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId = "678";

// console.log(userCard.getAttribute("data-user-id"));

// const inp = document.querySelector("input");
// const btn = document.querySelector("button");



// btn.addEventListener("click", function(){
//     console.log(inp.value);
// })


//creating inserting and removing elemetns from dom 


// const main = document.querySelector("main");
// let footer = document.createElement("footer");
// const span = document.createElement("span");

// span.innerHTML = "hey i am <i>dynamic</i>"


// main.append(footer,span);


// main.removeChild(span);

// main.insertBefore


const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list")
btn.addEventListener("click", function(){
    const value = inp.value;

    if(value.trim() === "") return;
    todoBox.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button  class="btn edit">
                        Edit
                    </button>
                    <button class="btn del">
                        Delete
                    </button>
                </div>
            </div>`;
            inp.value = "";
})