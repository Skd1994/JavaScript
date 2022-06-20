
// let myself ={
//     fname : "S",
//     lname : "K",
//     greet : function () {
//         console.log(this.fname);      //S
        
//     }
// }
// myself.greet()

// let myself = {
//     fname : "S",
//     lname : "K",
//     greet : function () {
//         console.log(myself.fname);
        
//     }
// }

// var b = 4
// let myself2 ={
//     fname : "T",
//     lname : "M",
//     age : 25,
//     greet : function () {
//         this.b = b
//         var a = 2
//         console.log(a);          //2
//         this.a = a
//         console.log(this.a);     //2
//         console.log(this.age);   //25
//         console.log(myself2.a);   //2
//         console.log(b);           //4
//         console.log(this.b);      //4
//         console.log(myself2.b);   //4

        
//     }
// }
// myself2.greet()



let laptop2 = {
    cpu : "i7",
    ram : 32 ,
    brand : 'HP',
    getconfig : function () {
        
        //console.log(storage);         //100
        console.log(laptop2.cpu);     //i7
        console.log(this.cpu);       //i7
        
    }
}
let laptop = {
    cpu : "i9",
    ram : 16 ,
    brand : 'HP',
    getconfig : function () {
        let storage = 100
        console.log(storage);         //100
        console.log(laptop.cpu);     //i9
        console.log(this.cpu);       //i9
        
    }
}
laptop2.getconfig()
