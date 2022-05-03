
function payment(){
    let name=document.getElementById("name");
    let card=document.getElementById("card");
    let date=document.getElementById("date");
    let cvc=document.getElementById("cvc");
    
   if(name.value==""){
       alert("Fill Name");
   }
   else{
       if(card.value.length!=19){
           alert("Fill card number correctly \n Otherwise It will not accept the payment");
       }
       else{
           if(date.value==""){
               alert("Fill Date");
           }
           else{
               if(cvc.value==""){
                   alert("Fill cvc");
               }
               else{
                   alert("Payment done Successfully.Thanks for buying");
                   <a href="index.html"></a>
               }
           }
       }
   }
}