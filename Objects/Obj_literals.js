var myself ={
    f_name : "S",
    l_name: "K",
    yoe : 0,
    skillset : ["creating memes","communication"],                    //array

    greet : function () {                                          //function=>it needs to be call to display
        return "hello, I am"+" "+this.f_name+" "+this.l_name
        
    },
    company : {                                  //object
        c_name : "TestYamtra",
        dept : "JS"
    }
    
    
}
myself.location = "INDIA"           //adding elements to the object
delete myself.location              //deleting elements permanantly from the object


// console.log(myself["f_name"]);      //S
// console.log(myself.l_name);         //K
// console.log(myself["company"]);     //{ c_name: 'TestYamtra', dept: 'JS' } 
    //printing the corresponding value for the particular property(method1)
//  console.log(myself.company);       //{ c_name: 'TestYamtra', dept: 'JS' } 
   //printing the corresponding value for the particular property(method1)
// console.log(myself.greet());       //hello, I am S K                        //printing the function
// console.log(myself);                //printing the complete object(method1)
//{
//     f_name: 'S',
//     l_name: 'K',
//     yoe: 0,
//     skillset: [ 'creating memes', 'communication' ],
//     greet: [Function: greet],
//     company: { c_name: 'TestYamtra', dept: 'JS' }
//     location: 'INDIA'
//   }

//================================================================================
console.log(myself.skillset[1]);                 //communication
console.log(myself.l_name);                       //K
console.log(myself.company.c_name);                //TestYamtra 
console.log(myself.company.dept);                   //JS