function logout()
{
   localStorage.removeItem("token");
   window.location.replace("../../user/views/login.html");
}
$(document).ready(function(){
     $("#submit").click(function(e){
        e.preventDefault();
        var email=document.getElementById("email").value;
        var name=document.getElementById("name").value;
        var password=document.getElementById("password").value;
        var accountype=document.getElementById("accountype").value;
        var phoneno=document.getElementById("phoneno").value;
        var collegename=document.getElementById("collegename").value;
        var flag=1;
       // var a=phoneno.toString().length;
        //console.log(a);
         if(email==="")
         {
           flag=0;
            window.alert("Email must be added");
         }
         else if(name==="")
         {
          flag=0;
          window.alert("Name must be added");
         }
         else if(password==="")
         {
          flag=0;
          window.alert("Password must be added");
         }
         else if((phoneno.toString().length !=10))
         {
          flag=0;
          window.alert("Phoneno must be valid");
         }
         else if(collegename==="")
         {
          flag=0;
          window.alert("College Name must be added");
         }
        if(flag==1)
        {
          //console.log("hello buddy");
      $.ajax("http://localhost:3000/examiner",{
        type:"POST",
        dataType:"json",
        contentType:"application/json",
        
            data:JSON.stringify(
                {
                  "email":email,
                  "name":name,
                  "password":password,
                  "accountType":accountype,
                  "collegeName":collegename,
                  "phoneNumber":phoneno

                }
            ),
            success:function(recent){
              console.log(recent)
              console.log("Data inserted");
              location.replace("../views/adminHome.html");
            },
            error:function()
            {
                console.log("Something went wrong");
            }
            
          });
        }
        flag=1;
       });
  });