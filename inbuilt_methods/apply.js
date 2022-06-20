var person1 ={
    fname : "S",
    lname : "K",
    introduce : function () {
        console.log("hello"+" "+this.fname+" "+this.lname);

        
    }
}
var person2 = {
    fname : "T",
    lname : "M",
    fullname : function () {
        console.log("hi"+" "+this.fname+" "+this.lname);
        
    }
}
function greeting(greet1,greet2) {
    console.log(greet1+ " "+this.fname+ " "+this.lname+" "+greet2);
    
}
greeting()
// person1.introduce()     //hello S K

// person1.introduce.apply(person2)       //hello T M
greeting.apply(person2,["hiiiii", "how r u"])        //hiiiii T M how r u
greeting.apply(person1,["hiiiii", "how r u"])        //hiiiii S K how r u
person2.fullname.apply(person1)                       //hi S K