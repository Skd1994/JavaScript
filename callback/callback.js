// function add(a,b,callback) {
//     callback()
//     console.log("this is an add function");
// }
// function disp() {                                        //a=7, b=7, callback=disp
//     console.log("this is disp function");
// }
// add(7,7,disp)

//this is disp function
//this is an add function



// function normal(externalFunction) {
//     externalFunction()
//     console.log("i am a normal function");
// }
// function callback() {
//     console.log("i am a callback function");
// }
// normal(callback)

//i am a callback function
//i am a normal function



// function ecommerce(status) {
//     var result = status()
//     if(result() == "paymentSuccessful"){
//         console.log("product booked successfully");
//     }else{
//         console.log("insufficient balance");
//     }
    
// }
// ecommerce(function paymentStatus(){
//     return function(){
//         return "paymentSuccessful"
//     }
// })

//product booked successfully

//step1: ecommerce() is being invoked
//step2: status() == paymentstatus()   ==> call back function, name has been overridden
//step3: invoking the paymentstatus() function in line 32
//step4: result == function(){         ==> line 32  (result is having the anonymous function)
    //    return "paymentSuccessful"
//}
//step5: invoking the result function in line 33
//step6: redirecting to line 41
//step7: returns the data "paymentSuccessful"
//step8: redirected to line 33(if condition)
//step9: if ther returned data is matching with the condition provided in if statement ==> if block will be 
//executed or else block is executed