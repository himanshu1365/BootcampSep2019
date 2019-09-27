$(document).ready(function(){
   $.ajax({
       type:'GET',
       url:'http://localhost:52379/login/loginAuthentication',
       contentType:"application/json; charset=utf-8",
       headers: {"Authorization": 'Bearer '+localStorage.getItem('userToken')},
       success:function(data,success){
           console.log('Authorized User')
       },
       error:function(data,success){
           console.log('Unauthorized User')
       }
   })
});