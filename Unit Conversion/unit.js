function Unit()
{
    var from_unit=document.getElementById("from_unit_val").value
    var to_unit=document.getElementById("to_unit_val").value
    var u_val=document.getElementById("val").value

    if (from_unit=="m" & to_unit=="km")
    {
        u_val=u_val/1000
        document.getElementById("result").innerHTML= u_val+" km"
    }

    else if(from_unit=="cm" & to_unit=="m")
    {
        u_val=u_val/100
        document.getElementById("result").innerHTML= u_val+" m"
    }
}