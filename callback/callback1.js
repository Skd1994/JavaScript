/**********Ex 1**************/
// function calculate(a,b,multiply) {
//     console.log("calculate function started");
//     multiply(a,b)
//     console.log("calculate function ended");
// }
// function mul(a,b)
// {
//     console.log("mul function started");
//     console.log(a*b);
//     console.log("mul function ended");
// }
// calculate(10,5,mul)

/**********Ex 2**************/
// function calculate(a,b,multiply) {
//     console.log("calculate function started");
//     var result=multiply(a,b)
//     console.log(result);
//     console.log("calculate function ended");
// }
// function mul(a,b)
// {
//     console.log("mul function started");
//     console.log("mul function ended");
//     return(a*b);
// }
// calculate(10,5,mul)

/**********Ex 3**************/
function calculate(a,b,multiply) {
    console.log("calculate function started");
    var result=multiply(a,b)
    console.log(result());
    console.log("calculate function ended");
}
calculate(10,5,function mul(a,b)
{
    console.log("mul function started");
    console.log("mul function ended");
    return function () {
    console.log("ananomus function started");
    console.log("ananomus function ended");
    return(a*b);
    }
})
/* step1: calculate() is invocked in line 37
   step2: mul() is renamed as multiply() in line 31
   step3: multiply() is invocked(ie mul()) in line 33
   step4: line 41 returns the ananmous function to line 33 ie to result variable
   step5: result() is invoked(ie ananmous function) in line 34
   step6: line 44 returns the 50 to line 34 */