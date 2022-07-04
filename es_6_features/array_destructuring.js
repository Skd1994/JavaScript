let arr1 = [1,2,3,4,5,6,true]


//case:1 accessing elements of an array in normal way
// let x = arr1[2]
// let y = arr1[7]
// console.log(x,y);     //3 undefined

//case:2 accessing first 2 elements of an array
// let [x,z] = arr1
// console.log(x,z);     //1 2

//case:3 accessing first 3 elements of an array
let [x,y,a] = arr1[arr1.length - 1]
console.log(x,y,a);      //3 2 1

//case:4 accessing elements of an array by skipping the elements in between
// let[a,,,b] = arr1
// console.log(a,b);           //1 4
// let[x,,,,,,,y]= arr1
// console.log(x,y);           //1 undefined