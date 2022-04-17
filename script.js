function compute()
{
    var principal = document.getElementById("principal").value;
    
    /*(new Intl.NumberFormat('en-CA', {style:'currency', currency:'CAD', useGrouping: false}).format(principal));*/
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;  
    var year = new Date().getFullYear()+parseInt(years);    
    var result = document.getElementById("result"); 
    
   /* document.getElementById("result").innerHTML="If you deposit "+principal+",\<br/> at an interest rate of "+rate+"%\<br/> You will receive an amount of "+amount+",\<br/>in the year "+year+"\<br/>"*/
   if (principal <="0")
   {
     //If all is well return true.
     alert("Please enter a positive number")
     document.getElementById("principal").focus();
    /* return false;*/
   }else{
      document.getElementById("result").innerHTML="If you deposit..:\<mark\>"+principal+"\</mark\>\<br\>+at an interest rate of..:\<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of..\<mark\>"+interest+"\</mark\>\<br\>in the year..\<mark\> "+year+"\</mark\>\<br\>"

   }
}
 /*else {
        result.innerHTML = '\<br\>' + 'If you deposit ' + '<mark>' + principal + '</mark>' + ',' + '\<br\>'
            + 'at an interest rate of ' + '<mark>' + rate + '%' + '</mark>' + ',' + '\<br\>'
            + 'You will receive an amount of ' + '<mark>' + interest + '</mark>' + ',' + '\<br\>'
            + 'in the year ' + '<mark>' + year + '</mark>'
    }  */  
   



function updateRate() 
{
    /*var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;*/
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}


/*function checkdata()
{
    //Create references to the input elements we wish to validate    
    var principal = document.getElementById("principal").value;
     
    //  var principal = document.getElementById("name");
    // var emailid =  document.getElementById("email");  
    // var zipcode =  document.getElementById("zipcode");  

//Check if principal field is empty

 if (principal <="0")
 {
   //If all is well return true.
   alert("Please enter a positive number")
      document.getElementById("principal").focus();
  /* return false;*/

 

 /*if(principal=="")
 {
    alert("Number field cannot be empty");
    principal.focus();
   // return false;
    }

 else if (principal<=0)
 {
   //If all is well return true.
   alert("numeric field must be greated than 0")
   principal.focus();
   return false;
 }
 else{
    //alert("continue")
    return true;
 }*/
