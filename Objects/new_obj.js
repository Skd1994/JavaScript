var myself = new Object()
myself.f_name = "S",
myself.l_name = "K",
myself.yoe = 0,

myself.skillset = ["java", "Js", "api"]
myself.greet = function () {
    return "hello i am "+" "+this.f_name+" "+this.l_name
    
},
myself.company ={
    c_name : "TestYamtra",
    dept : "JavaScript",
    upskilliing : ["api", "appium"]
}

console.log(myself.f_name);                 //S
console.log(myself.skillset[1]);              //Js
console.log(myself.greet());                  //hello i am  S K
console.log(myself.company.upskilliing);       //[ 'api', 'appium' ]
console.log(myself.company.upskilliing[1]);     //appium
console.log(myself.company);
// {
//     c_name: 'TestYamtra',
//     dept: 'JavaScript',
//     upskilliing: [ 'api', 'appium' ]
//   }