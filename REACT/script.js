// let obj ={
//     name: "John",
//     age: 30,
//     address: "saket nager",
//     company: "xyz",
// }

// let fn = ({name,company})=>{
//     console.log(name,company)
// }

// fn(obj);


// let a = 990;

// let print = () => {
//     console.log(a);
// }

// let ab = () => {
//     let a = 80;
//     print();
// }

// ab();



let rh1 = React.createElement("h1", {}, 
    React.createElement("span", {}, "Hello React i am under h1")
);


let realDomElem = document.querySelector("#root");
let rootofReact = ReactDOM.createRoot(realDomElem).render(rh1);

