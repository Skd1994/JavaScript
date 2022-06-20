var myself = {
    f_name : "S",
    l_name : "K",
    yoe : 0, 
    skillset : ["java","js"],
    greet : function(){
        return "hello all, i am"
    },
    company : {
        c_name : "ty",
        dept : "js"

    }
}
var biodata = Object.create(myself)
biodata.__proto__=myself          //inheritance
biodata.f_name = "M"              //overriding
biodata.l_name = "D"              //overriding

console.log(biodata);               //{ f_name: 'M', l_name: 'D' }
console.log(biodata.skillset);      //[ 'java', 'js' ]