// var pro = new Promise((resolve, reject)=>{
//     let x = "ty"
//     let y = "tys"
//     if(x == y){
//         resolve("x and y are equal")
//     }else{
//         reject("x and y are not equal")
//     }
// })

// pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

//x and y are not equal



// async function sync() {

//     console.log("start");

//     //=====================================
//     var p = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("in progress")
//         },2000)
//     })
//     //=======================================
//     await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
//     //==========================================
//     console.log("end");
// }
// sync()

//start
//in progress
//end


// console.log("login");

// setTimeout(() => {
//     console.log("It is a setTimeOut method1");
// }, 1000);

// setTimeout(() => {
//     console.log("It is a setTimeOut method2");
// }, 3000);

// setTimeout(() => {
//     console.log("It is a setTimeOut method3");
// }, 2000);

// console.log("logout");

//login
//logout
//It is a setTimeOut method1
//It is a setTimeOut method3
//It is a setTimeOut method2

console.log("start");
function f1() {
    console.log("f1"); 
}
function f2() {
    console.log("f2");
    f1()
}
function f3() {
    console.log("f3");
    f2()
}
f3()
console.log("end");

//start
//f3
//f2
//f1
//end