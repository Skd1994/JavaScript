var str = " hello world  "

//1==> str.length
//return the length of the string object

//console.log(str.length);   //14

//========================================================
//2==> str.split(seperator)
//split the string into sub strings based on the seperator
//return type is in the form of an array
//doesnot modify the existing string

//console.log(str.split(" "));      //[ '', 'hello', 'world', '', '' ]
//console.log(str.split("o"));        //[ ' hell', ' w', 'rld  ' ]
// console.log(str.split(" ", 3));       //[ '', 'hello', 'world' ]    3 elements
// console.log(str);                     // hello world

//=============================================================
//3==> str.charAt(position)
//return the character of the specified index

// console.log(str.charAt(5));              //o
// console.log(str.charAt(-1));             //empty space
// console.log(str.charAt(10));             //l
// console.log(str.charAt(20));             //empty space

//===============================================================
//4==> str.charCodeAt(index)
//prints the unicode of the character

// console.log(str.charCodeAt('o'));          //32
// console.log(str.charCodeAt(" "));           //32
// console.log(str.charCodeAt(16));           //NaN

// var str1 = " 16"
// console.log(str1.charCodeAt('16'));        //NaN

//============================================================
//5==> str.concat()
//doesnot modify the existing string
//return type is string
//string is appended to the end of the existing string

// console.log(str);                     //hello world  
// console.log(str.concat("welcome"));   //hello world welcome
// console.log(str);                     //hello world  

//================================================================
//6==> str.end
//check whether the string is ending with the same searched string

// console.log(str.endsWith("e"));        //false
// console.log(str.endsWith(" "));         //true
// console.log(str.length);                //14
// console.log(str.endsWith(" ",14));       //true
// console.log(str.endsWith("rld  "));       //true

//===================================================================
//7==> str.includes("search_string")

//console.log(str.includes("ld"));        //true

//=========================================================
//8==>str.indexOf("search_string")

// console.log(str.indexOf(" "));          //0
 //console.log(str.indexOf('l'));          //3

//========================================================
 //9==> str.lastIndexOf("search_string")
// console.log(str.lastIndexOf(" "));          //13
// console.log(str.lastIndexOf('l'));           //10

//===========================================================
//10==>str.replace("search_string")

// str.replace("")
//  console.log(str.replace("hello", "hi"));        //hi world 
// console.log(str);
// console.log(str.replace("l", "L"));             //heLlo world (only first occuring character will be replaced)

//==========================================================
//11==>str.repeat(number)

//console.log(str.repeat(2));                        // hello world   hello world 
//it will print as many copies needed by the user and append it to the end of the existing string