//...array.concat..//
// var arr1 = [7,7.8,"cheems",'h',true,undefined]
// var arr2 = [8,8.8,"chimky",true,false]
// var arr3 = arr1.concat(arr2)
// console.log(arr3);

//....o/p.......//
// [
//     7,        7.8,
//     'cheems', 'h',
//     true,     undefined,
//     8,        8.8,
//     'chimky', true,
//     false
//   ]


//...array.push(elements)..//
// const fruits = ["mango","orange","apple"]
// console.log(fruits.push("kiwi"));
// console.log(fruits);
// //op// -->4(size of array after modification)  [ 'mango', 'orange', 'apple', 'kiwi' ]


//...array.pop()..//
// const fruits = ["mango","orange","apple"]
// let fruit=fruits.pop()
// console.log(fruits);
//op//-->[ 'mango', 'orange' ]

//...array.shift()..//
const fruits = [1,"orange","apple"]
 let fruit=fruits.shift()
 console.log(fruits);
 console.log(fruit);
 //op//-->[ 'orange', 'apple' ]

//...array.unshift(elements)..//
//  const fruits = ["mango","orange","apple"]
// console.log(fruits.unshift("kiwi"));
// console.log(fruits); 
//op//-->4    [ 'kiwi', 'mango', 'orange', 'apple' ]

//...array.splice(start index,delete count,new elements)..//
// const fruits = ["mango","orange","apple"]
// console.log(fruits.splice(2,0,"lemon"))
// console.log(fruits);
  //op//-->[ 'mango', 'orange', 'lemon', 'apple' ]


//...array.slice(start index,end index)..//
// const fruits = ["mango","orange","apple","abc","cde"]
// const citrus = fruits.slice(1,3)
// console.log(citrus);
// console.log(fruits);

//op//-->[ 'orange', 'apple' ]

//...array.indexof(search element,start position)..//left===>right
//  const fruits = ["mango","orange","apple","abc","cde", "apple"]
//  console.log(fruits.indexOf("apple",0))
 //op//-->2

 //...array.lastindexof(search element,start position)..//right===>left
//  var fruits = ["mango","orange","apple","abc","cde", "apple", "apple", 4, 9]
// console.log( fruits.lastIndexOf("apple"));

var arr1 = [10, 20 ,30 ,40, 50, 60, 20, 40]
var arr2 = [9, 70]
//--------------------------------------------------------------
//1==>array.concat(number[])
//combines 2 or more arrays
//this method returns a new array without modifying any existing arrays

// console.log(arr1.concat(arr2));//concatinating arr1 with arr2
// console.log(arr1);//existing array is not modified

//---------------------------------------------------------
//2==>array.push(elements)
//it will add the given elements at the end of an array and returns the length of an array
//it will modify the existing array

// console.log(arr1);
// console.log(arr1.push("js"));
// console.log(arr1);

//===================================================================
// console.log(arr1.slice(2,4));
// console.log(arr1);




//--------------------------------------------------------------
//8==> array.every(()=>{})
//it will return Boolean result based on the condition satisfied by all the elements of an array i.e
//returns true only if all elements satisfies the given condition

// console.log(arr1);
// console.log(arr1.every((element) => {
//     return element<3
// }));
//op//=>[
//   10, 20, 30, 40,
//   50, 60, 20, 40
// ]
// false

//---------------------------------------------------------------
//9==> array.some(()=>{})
//it will return Boolean result based on the condition satisfied by any one of the element of an array
//returns true if any of element satisfies the given condition

// console.log(arr1);
// console.log(arr1.some((element) => {
//     return element>3
// }));
//op//==>[
//   10, 20, 30, 40,
//   50, 60, 20, 40
// ]
// true

//-----------------------------------------------------------------
//10==> array.indexOf(searchElement, startPosition)
//it will return the index value of search element
//traversing is from left ===> right

// console.log(arr1);
// console.log(arr1.indexOf(4)); //-1 not present in arr1
// console.log(arr1.indexOf(40)); //3
// console.log(arr1.indexOf(10,2)); //-1  by giving the atart position

//op//==>[
//   10, 20, 30, 40,
//   50, 60, 20, 40
// ]

//--------------------------------------------------------------------
//11==> array.lastIndexOf(searchElement, startPosition)
//it will return the index value of search element
//traversing is from right ===> left

// console.log(arr1);
// console.log(arr1.lastIndexOf(4)); //-1
// console.log(arr1.lastIndexOf(40)); //7
// console.log(arr1.lastIndexOf(10,2)); //0  by giving the atart position

//op//==>[
//   10, 20, 30, 40,
//   50, 60, 20, 40
// ]

//-----------------------------------------------------------------------
//12==> array.reverse()
//it will return the array in reverse order
//it modifies the existing array

// console.log(arr1);     //[10, 20, 30, 40, 50, 60, 20, 40]
// console.log(arr1.reverse());  //[ 40, 20, 60, 50, 40, 30, 20, 10]
// console.log(arr1);  //[  40, 20, 60, 50, 40, 30, 20, 10 ]

//======================================================================
//13 ==> array.includes(searchElement)
//it will return the Boolean result based on searchElement presence.

// console.log(arr1.includes(40));  //true (it will take only 1 element)

//======================================================================
//14 ==> array.join(join_character)
//it will add the elements of an array based on the character specified and returns the string

// console.log(arr1.join("*"));  //10*20*30*40*50*60*20*40 

//=======================================================================
//15 ==> array.forEach(() =>{// task})
//it will perform the task given in the callback function and returns void
//implemented by map method of an array
//but it will not modify the existing array

// arr1.forEach((element, index,arr1) =>{
//     console.log(element+" : "+index+" : "+arr1);
//     console.log(arr1[index]);               //it is not storing in an array
// })
// //console.log(arr1);
// //.....for loop....//
// for (let index = 0; index < arr1.length; index++) {
    
//     console.log(index+" : "+arr1[index]);
    
// }
// ///......for of loop..//
// var index = 0
// for (var index of arr1) {

// console.log(index+" : "+arr1[index]);
// index++
    
// }
// //...for in loop...///
// var index = 0
// for (var index in arr1) {
//     console.log(index + "  " +arr1[index]);
//     index++
    
        
//     }


//op//
// 10 : 0
// 20
// 20 : 1
// 40
// 30 : 2
// 60
// 40 : 3
// 80
// 50 : 4
// 100
// 60 : 5
// 120
// 20 : 6
// 40
// 40 : 7
// 80

// [10, 20, 30, 40, 50, 60, 20, 40]

//===============================================
//16 ==> array.map(()=>{//modify statement})
//it will return the modified form of an array and implemented by filter method of an array
//but it will not modify the existing array

// console.log(arr1.map((element, index)=>{
//     return element*2                    //return type is different from forEach(),
// }));                                    //it is storing in an array
// console.log(arr1);

//op//==>[20,  40, 60, 80,100, 120, 40, 80]
// [10, 20, 30, 40,50, 60, 20, 40 ]


//=========================================================
//17 ==> array.filter(()=>{//filter condition})
//it will return the array based on filter condition
//it will return the elements in the form of array that only satisfies the given filter condition
//it will not modify the existing array

// console.log(arr1.filter((element, index, array)=>{
//     if(element> 30){
//         return element                 //[ 40, 50, 60, 40 ]
//     }
// }));
// console.log(arr1);                     //[10, 20, 30, 40,50, 60, 20, 40]

//=========================================================
//18 ==> array.sort(()=>{//compare function})
//it will sort the array in ascending_order(return a-b)
//descending order(return b-a) based on return specified in compare function

// console.log(arr1.sort((a,b)=>{
//     return b-a                          // [60, 50, 40, 40,30, 20, 20, 10] descending
// }));

//=========================================================
//19 ==> array.reduce((previousValue, currentValue)=>{})
//it will reduce the entire array into a single unit/ to the required form(array, object, number)
//traversing is from left===>right

// const numbers = [175, 50, 25]
// function myFunc(total, num) {
//     return total-num
    
// }                                       //175-50= 125   125-25= 100
// console.log(numbers.reduce(myFunc));   //100

//eg2
// const numbers1 = [15.5, 2.3, 1.1, 4.7]      
// function getSum(total, num) {
//     return total + Math.round(num)
    
// }                                           //23.6===24
// console.log(numbers1.reduce(getSum, 0));   //24

//==========================================================
//20 ==> array.reduceRight((previousValue, currentValue)=>{})
//similar to reduce method but traversing is from right===>left

// const numbers3 = [175, 50, 25]                  //25-50= -25   -25-175=  -200
// console.log(numbers3.reduceRight(myFunc));      ///-200
// function myFunc(total, num) {
//     return total-num
    
//}








