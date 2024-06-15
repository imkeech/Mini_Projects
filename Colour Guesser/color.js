var squares = document.getElementById("container");
var arr = [];

function Color() 
{
    for (k = 0; k < 4; k++) 
    {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var clr = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(clr)
    }
    document.getElementById("clr_5").innerHTML=arr[0];
    document.getElementById("clr_4").innerHTML=arr[1];
    document.getElementById("clr_3").innerHTML=arr[2];
    document.getElementById("clr_2").innerHTML=arr[3];
    ran=Math.floor(Math.random()*4)
    sel=arr[ran]
    arr=[]
    squares.style.backgroundColor=sel;
}
function check(obj)
{
    obj=obj.innerText;
    if (sel==obj)
    {
        document.getElementById("ans").innerHTML="  You Have Choosen the Correct Answer!!!!";
        Color()
    }
    else
    {
        document.getElementById("ans").innerHTML="   Better Luck Next Time##";
        Color()
    }

}