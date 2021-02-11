 var valid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
 
 
 function validateForm()
 {
    var name= document.getElementById("f_name").value;
    var pass= document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;
    var textarea1=document.getElementById("txt").value;
    var email=document.getElementById("email").value;
  
    
    
    if(name.trim().length<3)
     {
         alert("pleae use a valid name");
         return false;
     }
     
 


    
     if(pass.length<8)
     {
         alert("password is not too strong");
         return false;
     }

     

     if(pass!=confirm)
     {
         alert('password do not match');
         return false;
     }
     
     if(textarea1.length>100)
     {
        alert("only 150 words are allowed here");
     }

     if(email.match(valid))
     {
        alert("email verified");
     }else
     {
         alert("email  is not valid")
     }

     
        
        
    
 }
  

