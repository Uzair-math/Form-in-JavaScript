
// function first() {
//     const per=document.getElementById("email");
//     const per1=document.getElementById("pass")
//     console.log(per);
//     console.log(per1);
//     localStorage.setItem(per,per1);
//     let a="umuhammaduzair123@gmail.com";
//     const acc=document.getElementById("email")
//     const pass= document.getElementById("email")
//     let b="Uzair123@";
//     let c=["amuhammaduzair82@gmail.com","umuhammaduzair123@gmail.com","uzair123@gmail.com","asdf123@gmail.com"]
//     let d=["uzair123@","uzair@123","Uzair123@","Uzair@123"]
//     for (let i = 0; i < c.length; i++) {
//        for (let j = 0; j < d.length; j++) {
//         if (per==a && per1 == b) {
//             console.log("welcome");
//         }
//         else{
//             console.log("error");
//         }
        
//        }
//     }    
//     // if (c[i]===a && d[i]===b) {
//     //     console.log("welcome");
//     // }
//     // else(
//     //     console.log("user can not define")
//     // );
// }
// console.log(first());

// const arr= document.getElementById("email");
// console.log(arr);



 

// // let first = document.getElementById("email")
// // console.log(first);
// // let second = document.getElementById("password")
// // let out = document.getElementById("btn1")
// // console.log(second);
// // let third = [];
// // let forth = [];
// // let a=third.push(first);
// // let b=forth.push(second)
// // console.log("this value is ",a);
// // console.log("this value is ",b);

// // function sum() {
// //     second.innerHTML = first.value;
// // }
// // out.addEventListener('click',sum)

// function sum() {
//     const first = document.getElementById("email")
//     console.log(first);
//     const second = document.getElementById("password");
//     console.log(second);
//     localStorage.setItem('firstname',first)
//     console.log(first);
//     document.getElementById("email").innerHTML=
//     localStorage.getItem(first)
// }
// console.log(sum());


// const arr= document.getElementsByClassName("firstname");
// console.log(arr);

// const arr= document.getElementsByClassName("signup-form")


// const nameInput = document.getElementById('name-input');
// const nameInput1 = document.getElementById('password');
// const saveButton = document.getElementById('save-button');
// const outputDiv = document.getElementById('output');

// // Load the saved name when the page loads
// window.addEventListener('load', () => {
//   const savedName = localStorage.getItem('name');
//   if (savedName) {
//     outputDiv.innerHTML = `Welcome back, ${savedName}!`;
//   }
// });


// // Save the name when the button is clicked
// saveButton.addEventListener('click', () => {
//   const name = nameInput.value;
//   localStorage.setItem('name', name);
//   outputDiv.innerHTML = `Hello, ${name}!`;
// });
// window.addEventListener('load',()=>{
//     const hello = localStorage.getItem('pass');
//     if (hello) {
//         outputDiv.innerHTML= `welcome back, ${hello}`
//     }
// });
// saveButton.addEventListener('click',()=>{
//     const pass=nameInput1.value;
//     localStorage.setItem('pass',pass);
// })

// const arr=document.getElementById("name-input")
// const per=document.getElementById("save-button")
// window.addEventListener("hello", ()=>{
//     const save = localStorage.getItem("name-input");
//     if (save) {
//         outputDiv.innerHTML = `welcome back, ${save}`;
//     }
// });
// savebtn.addEventListener(`click`,()=>{
//     const email = save.value;
//     localStorage.setItem('name', email); 
// })


// querySelectorAll

// const arr=document.querySelector("form.last-name");
// // console.log(arr);
// // arr.style.color="blue";
// // console.log("hello");
// // arr.style.color = "blue";

// console.log(arr);

// get and set attribute

// const link = document.querySelector("a");
// console.log(link.getAttribute("href", "http://w3resource.com"));

// const element = document.querySelector(".signup-form input")
// console.log(element.getAttribute("type"));

// const rootnode = document.getRootNode()
// // console.log(rootnode);
// const arr=rootnode.childNodes[0];
// console.log(arr);


// let imarray = ['hello','true','false']
// localStorage.setItem('Name', 'harry');
// localStorage.setItem('Name1',"uzair");
// localStorage.setItem('hey', JSON.stringify(imarray))
// localStorage.removeItem('Name1')
// let arr = localStorage.getItem('Name')
// arr = JSON.stringify(localStorage.getItem('hey'))
// console.log(arr);
// sessionStorage.setItem('sessionName','sharry')
// sessionStorage.setItem('sessionName1','suzair')
// sessionStorage.setItem('sessionNamehey',JSON.stringify(imarray))




