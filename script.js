function compute()
{
    
    var principal = document.getElementById("principal").value;
    /*(new Intl.NumberFormat('en-CA', {style:'currency', currency:'CAD', useGrouping: false}).format(principal));*/
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate /100;  
    
    var year = new Date().getFullYear()+parseInt(years);     
    
   /* document.getElementById("result").innerHTML="If you deposit "+principal+",\<br/> at an interest rate of "+rate+"%\<br/> You will receive an amount of "+amount+",\<br/>in the year "+year+"\<br/>"*/
   /* document.getElementById("result").innerHTML="If you deposit "+ principal+", \<br\>at an interest rate of "+rate+"% \<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"*/
   document.getElementById("result").innerHTML="If you deposit "+principal+" \<br\>at an interest rate of "+rate+"% \<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

   /*var interest = principal * year * rate /100;*/
   /*p = document.getElementById("principal").value;*/
    /*document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"*/
}

function updateRate() 
{
    /*var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;*/
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}


function checkdata(){
    //Create references to the input elements we wish to validate    
    var principal = document.getElementById("principal").value;
     
    //  var principal = document.getElementById("name");
    // var emailid =  document.getElementById("email");  
    // var zipcode =  document.getElementById("zipcode");  

//Check if principal field is empty
if(principal <= 0){
    alert("Enter Positive numbers or grater than Cero");
    principal.focus();
    return false;
    }
 else 
    //If all is well return true.
    alert("Form validation is successful.")
  return true;       
  
  } 