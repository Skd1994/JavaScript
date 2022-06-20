var person1 ={
    fname : "Software",
    lname : "solutions",
    introduce : function () {
        console.log("hello"+" "+this.fname+" "+this.lname);
        
    }
} 
var person2 ={
    fname : "Test",
    lname : "Yamtra",
    fullname : function() {
        console.log("hiiii"+" "+this.fname+" "+this.lname);
        
    }
}
function greeting (greet1,greet2,greet3) {
    console.log(greet1+" "+this.fname+" "+this.lname+" "+greet2+" "+greet3);
    
}


// var return1 = person1.introduce.bind(person2)
// return1()                                           //hello Test Yamtra

// var return2 = person2.fullname.bind(person1)
// return2()                                                 //hiiii Software solutions

//const return3 = greeting.bind(person1, "how r u", "come here")
//return3()                                                         //how r u Software solutions come here

//var return3 = greeting.bind(person1, "how r u", "come here","hellew")
// return3()                                                   //how r u Software solutions come here hellew