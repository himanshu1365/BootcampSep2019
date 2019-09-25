$(document).ready(function(){
    $(".login-button").click(function(){
        let studentDetail = {}
        studentDetail.Username = $("#userID").val();
        studentDetail.password = $("#userPassword").val();
        console.log(studentDetail.Username)
        $.ajax({
            type:"POST",
            url: "http://localhost:52379/login",
            data:JSON.stringify(studentDetail),
            contentType:"application/json; charset=utf-8",
            success:function(data, success){
                if(data){
                    $(location).attr('href','home.html')
                }
                else{
                    
                }
            },
            error:function(){
                console.log('failed')
            }
        })
    })

    $('.save-details').click(function(){
        $('.error-message').empty()
        let studentDetail = {};
        studentDetail.username = $("#name").val();
        studentDetail.email = $("#email").val();
        studentDetail.password = $("#password").val();
        studentDetail.collegeName = $("#collegeName").val();
        studentDetail.collegeID = $("#collegeID").val();
        $.ajax({
            type:"POST",
            url:"http://localhost:52379/signup",
            data:JSON.stringify(studentDetail),
            contentType:"application/json; charset=utf-8",
            success: function(data,success){
                if(data){
                    $(location).attr('href','login.html')
                }
                else{
                    console.log('User found')
                    $('.error-message').html("User already existed")
                }
            },
            error: function(){
                console.log('fail')
            }
        })
    })
})