var a = [20,40,50,30,10];
var max = a[0];
for(var i = 1; i<a.length; i++)
{
    if(max < a[i])
    {
        max = a[i];
    }
}
console.log(max);      //50