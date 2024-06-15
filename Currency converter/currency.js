function convert() {
    var from = document.getElementById("f_m").value
    var to = document.getElementById("t_m").value
    var amt= document.getElementById("amt_val").value
    if ((from=="India") & (to=="US_Dollar"))
    {
        amt=amt/81.36
        document.getElementById("to_amt").innerHTML="US DOLLARS:  "+ amt
    }
    else if ((from=="US_Dollar") & (to=="India"))
    {
        amt=amt*81.36
        document.getElementById("to_amt").innerHTML="Indian Rupees:  "+ amt
    }
    else if(((from=="India") & (to=="India"))|| ((from=="US_Dollar") & (to=="US_Dollar")))
    {
        if(from=="India")
        {
            document.getElementById("to_amt").innerHTML="Indian Rupees:  "+ amt
        }
        if(from=="India")
        {
            document.getElementById("to_amt").innerHTML="US DOLLARS:  "+ amt
        }
    }
}