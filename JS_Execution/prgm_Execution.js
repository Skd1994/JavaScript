// var a = 20
// var b = 40
// var c = -50
// let d = 60
// const e = 70
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// var a = 5
// function sum(a,b) {m 
    
//     var a = 20
// var b = 40
//  var c = -50
//  let d = 60
//  const e = 70
//  console.log(a+b);
// console.log(a);
// console.log(b);
//  console.log(c);
//  console.log(d);
//  console.log(e);
    
// }sum(2,3)

// variables inside the block//
// var a = 10
// {
//     var a = 20
//     var b = 30
//     let c = 40
//     const d = 50
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);


// }
// var a = 10
// {
//     //function inside the block
//     function sum(a,b) {
//         console.log(a+b);

//         var a = 50
//         let c = 80
        
//     }
//     sum(5,1) //calling the function
//     var a =90
// }

//var a = 10
// {
//     //variables inside the block
//     var a = 20
//          var b = 30
//          let c = 40
//          const d = 50
//          console.log(a);
//          console.log(b);
//          console.log(c);
//          console.log(d);

//          //function inside the block
//     function sum(a,b) {
//         console.log(a+b);
        
//     }
//     sum(5,1)//calling the function
// }


//{function(block(function (variables)))}
// var a = 5
// function sum(a,b) {
    
//     console.log(a+b); 
// {
//     function demo(c,d) {
//         var e = 2
//         var f = 3
//         console.log(c+d);
        
//     }demo(7,8)
// }
    
// }sum(9,10)

//global: a:5
//local: a:9 b:10 demo:undefined c:7 d:8 e:undefined f:undefined e:2 f:3

// var a = 7
// function sum(a,b) {
//     {
//         function sub(c,d) {
            
//             console.log(d-c);
//         }
//         sub(5,4)
//         var a = 6
//             var b =8
//             let c = 9
//             const d = 10
//     }
//     console.log(a+b);
    
// }
// sum(1,2)

//{function(block(variables))(block(variables))}
// var a = 5
// function sum(a,b) {
// {
//     var a = 6
// }
// {
//     var b = 7
// }
    
//     console.log(a+b); 
    
// }
// sum(10,20)

//global : a:undefined    a:5
//local a:10,b:20   a:6,b:20   a:6,b:7