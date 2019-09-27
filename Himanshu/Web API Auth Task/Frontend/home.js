$(document).ready(function(){
   $(document).on('load',function(){
       $.ajax({
           type:'GET',
           url:'http://localhost:52379/signup/googleImage',
           contentType:"application/json; charset=utf-8",
           success:function(data,success){
               console.log('hello')
                $('#getImage').attr("src",data);
            },
            error:function(data,success){
                console.log('error')
            }
       })
      
   })
    $.ajax({
       type:'GET',
       url:'http://localhost:52379/login/loginAuthentication',
       contentType:"application/json; charset=utf-8",
       headers: {"Authorization": 'Bearer '+localStorage.getItem('userToken')},
       success:function(data,success){
           console.log('Authorized user')
       },
       error:function(data,success){
           console.log('Unauthorized User')
       }
   })

});