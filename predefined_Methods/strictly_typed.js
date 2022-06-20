let data = "6"
let input = 6
result = data == input   //true  bcoz the datatype is not being compared, only the data is being compared
console.log(result);

result2 = data ===input  //false bcoz the datatype is being compared, and also the data is being compared
console.log(result2);