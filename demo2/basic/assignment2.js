var info = [{fname:"abc" , address:"India"},
{fname:"def" , address:"usa"},
 {fname:"ghi" , address:"russia"},
 {fname:"jkl" , address:"europe"},
 {fname:"mno" , address:"India"}];

 var p=""
    
 var country=[]
 for(var i=0;i<info.length;i++)
 {
    p=info[i]
    country.push(p.address)
 }
var str=country     
for(var i=0;i<country.length;i++)
{

var str1=country
var count=0
for(var j=0;j<country.length;j++)
{
 var str2=country
 if(str1[i]==str2[j] && i>j)
 {
     break
 }
 if(str1[i]==str2[j])
 {
     count++
 }
}
if(count>=1)
{
 console.log(str[i]+" "+count);
}
if(count>1)
{
 console.log(str[i]+" "+count);
}
}