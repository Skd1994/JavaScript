// var employee1={
//     ename: "Tony Shark",
//     eid : "0965",
//     introduce: function (){
//     console.log("hello"+" "+this.fname+" " +this.lname)
//     }
//     }
    
//     var employee2={
//     ename : "Cheater parker",
//     eid : "0999",
//     information : function(){
//     console.log("hii"+" "+this.ename+" " +this.eid)
//     }
//     }
    
//      function greeting(greet1,greet2){
//     console.log(greet1+" " +this.ename+" with eid  "+this.eid+" "+greet2)
//     }
    
    
//     greeting.call(employee1, "call me back","come to meeting urgently" ) 
//     //call me back Tony Shark with eid  0965 come to meeting urgently

//     var return1 = greeting.bind(employee2, "call me back","come to meeting urgently" )
//      return1()                            //call me back Cheater Parker with eid 0999 come to meeting urgently


//       greeting.apply(employee1, ["call me back","come to meeting urgently"]) 




//arrow function
    var sum=(a,b)=>( a+b)
    console.log(sum(6,7))    //13

var greater=(a,b)=>{
if(a>b)
return "a is greater than b"
else 
return "b is greater than a"
}
console.log(greater(3,5))   //b is greater than a