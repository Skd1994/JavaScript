var a = [20,40,50,30,10];
var min = a[0];
for(var i = 1; i<a.length; i++)
{
    if(min > a[i])
    {
        min = a[i]
    }
}
console.log(min);        //10