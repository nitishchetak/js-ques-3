// undefined
var a;
console.log(a);

if(a== undefined)
{
    console.log("a is undefined");
}

a= 4;

if(a== undefined)
{
    console.log("a is undefined");
}
else
{
    console.log("After assigning value to a, now a is defined and a is "+a);
}


var x = "calling b before declaring it :-";
console.log(x);
// not defined
console.log(b);