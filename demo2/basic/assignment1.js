var a = ["selenium", "webdriverio", "terminal"];
var b = ["java", "js", "console"];
var c = [];
for(var i=0; i<a.length; i++)
{

c.push(a[i]+" : "+b[i])          //[ 'selenium : java', 'webdriverio : js', 'terminal : console' ]
}
console.log(c);