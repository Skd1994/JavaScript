var employee1 = {
    ename : "tony shark",
    eid : 9045,
    information : function () {
        console.log(" hello i am "+ this.ename+" "+" with employee id " +this.eid);
        console.log(this.ename);
        console.log(this.eid);
        // this.name.call(employee1)     //hi this is tony shark
        // this.name.call(employee2)     //hi this is cheater parker
        // this.information.call(employee1)
        
    }
}
var employee2 = {
    ename : "cheater parker",
    eid : 9046,
    age : 28,
    name : function () {
        console.log("hi this is"+" "+this.ename);
        
    }

}

function greeting(greet1,greet2) {
    console.log(greet1+ " "+this.ename+ " with "+this.eid+" "+greet2);
    
}
 //employee1.information()
// hello i am tony shark   with 9045
// tony shark 
// 9045

//employee2.name()   //hi this is cheater parker

employee1.information.call(employee2)  //function borrowing
// hello i am cheater parker  with employee id 9046
// cheater parker
// 9046

//employee2.name.call(employee1)       //hi this is tony shark  //function borr owing

//greeting.call(employee1)  //undefined tony shark 9045 undefined

//greeting.call(employee1,"hellew", "hii")     //hellew tony shark with 9045 hii

//greeting.call(employee2,"hii", "how r u")       //hii cheater parker with 9046 how r u
    
