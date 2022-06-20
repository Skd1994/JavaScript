var myself ={
    fname: "S",
    lname: "K"

}
//case1: regular method
// let myName = myself.fname
// console.log(myName);     //S

 //case2:
//condition1: curly braces
//condition2: reference name should be same as that which is in the object
// let{fname} = myself
// console.log(fname);     //S

//case3: change the reference variable => so that we can declare our own reference variable
//fname in object myself will be renamed as myname
let{fname : myname} = myself
console.log(myname);           //S
console.log(myself.fname);     //S
//console.log(fname);            //error fname is not defined
console.log(myself);              //{ fname: 'S', lname: 'K' }