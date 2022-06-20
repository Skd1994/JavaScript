// function rest(a,b,...c) {
//     console.log(a,b,c);        //2 6 [ 7, 8, 9, 4 ]
    
// }
// rest(2,6,7,8,9,4)

//eg1 spread combining the existing arrays
// var arr1=[10,20,30,40]
// var arr2=[50,60,70]
// var arr3=[...arr1,...arr2]
// console.log(arr3);         //  10, 20, 30, 40,50, 60, 70]

//eg2 spread combining the existing arrays
// var arr1=[20,30,40,50]
// var arr2=[...arr1,60]
// console.log(arr2);           //[ 20, 30, 40, 50, 60 ]

//eg4 combine 2 objects, the properties match combined,
//the properties didnt match were overriden by the last object
// const obj1 ={
//     firstname: "S",
//     lastname: "K",
//     salary : 40000
// }
// const obj2={
//     salary:50000,
//     gmail:"skd@gamil" 
// }
// const res={...obj1,...obj2}
// console.log(res);            //{ firstname: 'S', lastname: 'K', salary: 50000, gmail: 'skd@gamil' }


//eg3 copying objects using spread parameter
//obj2 is having all the parameters of obj1 using the spread operator
// const obj1={
//     fname:"j",
//     laname:"s"
// }
// const obj2={...obj1}
// console.log(obj2);      //{ fname: 'j', laname: 's' }
