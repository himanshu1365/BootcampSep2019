$(window).on('load', function(){
   $.ajax({
       type:'GET',
       url:'http://localhost:52379/login/loginAuthentication',
       contentType:"application/json; charset=utf-8",
       success:function(data,success){
           console.log('Authorized User')
       },
       error:function(data,success){
           console.log('Unauthorized User')
       }
   })
});