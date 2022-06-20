// var a = 10
// var b = 70
// function sample() {      //for sample, global is lexically  present
//     console.log(a);    //10
//     console.log(b);    //undefined
//     var b = 200
//     console.log(b);    //200
//     function inner(){    //for inner, sample is lexically present
//         var a = 30
//         var b = 80
//         console.log(a);  //30
//         console.log(b);  //80
//     }
//     inner()
// }
// sample()

// var a = 10
// var b = 70
// function sample() {     // for sample, global is lexically present
//     console.log(a);    // 10
//     console.log(b);    //undefined
//     var b = 200
//     console.log(b);    //200
    
//     function inner() {   //for inner, sample is lexically present
//         console.log(a);  //undefined
//         var a = 700
//         console.log(b);  //200
//         console.log(a);  //700

        
//     }
//     inner()
    
// }
// sample()


//inner is lexically present inside the outer and outer is lexically present inside the global
// function outer(value1) {
//     return function inner(value2){
//         return (value1+value2)
//     }
// }
//     var add = outer(5)

//     console.log(add(7));


// var my_name = "SKD"
// console.log(my_name);         //SKD
// function display_name() {
//     var age = 27

//     function display_age() {
//         console.log(age);       //27
//         console.log(my_name);  //SKD
        
//     }
//     display_age()
// }
//     display_name()


//display_age() is lexically present inside the display_name()
//and display_name() is lexically present inside the global
// var my_name = "SKD"
// console.log(my_name);          //SKD
// function display_name() {
//     console.log(age);          //undefined
//     var age = 27
     

//     function display_age() {
//         console.log(age);        //27
//         console.log(my_name);   //SKD
        
//     }
//     display_age()
// }
//     display_name()

//display_name() ===> outer function
//display_age() ===> inner function


