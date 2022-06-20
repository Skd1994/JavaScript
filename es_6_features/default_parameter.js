// function multiply(a,b=2) {
//     console.log(a*b);           //10  
// }
// multiply(5)


// function multiply(a,b) {
//     console.log(a*b);           //NaN
// }
// multiply(5)


// function multiply(a,b) {
//     console.log(a*b);           //15
// }
// multiply(5,3)


// function multiply(a,b=2) {
//     console.log(a*b);           //15 
// }
// multiply(5,3)

// class add{
//     constructor(a,b=5){
//         console.log(a+b);      //9
//     }
// }
// var addition = new add(5,4)    

class sub{
    constructor(a,b=5){
        console.log(a-b);         
    }
}
var subtraction  = new sub(10)      //5
var subtraction1 = new sub(10,2)  //8