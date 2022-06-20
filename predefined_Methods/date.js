var d = new Date()

console.log(d.toDateString());                          //Mon Jun 06 2022
console.log("today's date : "+ d.getDate());             //today's date : 6
console.log("today's day : "+ d.getDay());                 //today's day 1
console.log("today's year : "+ d.getFullYear());           //today's year 2022
console.log("today's month : "+d.getMonth());              //today's month : 5

var date = d.toDateString()
console.log(date);                                         //Mon Jun 06 2022
console.log(date.split(" ")[0]);                           //Mon
console.log(date.split(" ")[1]);                            //Jun
console.log(date.split(" ")[2]);                             //06
console.log(date.split(" ")[3]);                             //2022
console.log(date.split(" ")[4]);                             //undefined
