
function findcolor()
{
    var colorcomb="0123456789ABCDEF"; 
var color="#";
    for(var i=0;i<6;i++)
    color += colorcomb[(Math.floor(Math.random() *16))];
    return color;
}
function colorchange()
{
    var getcolor=findcolor(); //get colorname from function find color
    document.getElementById("hr").innerHTML=getcolor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = getcolor;
}
