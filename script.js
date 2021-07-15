function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0) {
        alert("Please set a positive value for amount")
    } 

    document.getElementById("result1").innerText="if your deposit " + principal + ",";
    document.getElementById("result2").innerText="at an interest rate of "+ rate + "%.";
    document.getElementById("result3").innerText="You will rescive an amount of "+interest+ " , ";
    document.getElementById("result4").innerText= "in the year of "+ year;
 
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}


        