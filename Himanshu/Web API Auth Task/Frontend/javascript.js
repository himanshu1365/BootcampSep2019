$(document).ready(function(){
    $(".login-button").click(function(){
        $('.login-error-message').empty();
        checkStatus = checkValidation();
        let studentDetail = {}
        studentDetail.Username = $("#userID").val();
        studentDetail.password = $("#userPassword").val();
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
                    $('.login-error-message').html("Username or password is incorrect")
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

    $('#userID').focus(function(){
        $('#user-icon').css({'color':'#38F6F9'})
    }).focusout(function(){
        $('#user-icon').css({'color':'black'})
        if($('#userID').val().length == 0){
            $('#user-error-message').html("Username cannot be empty")
            return
        }
        $('#user-error-message').empty();
    })
    $('#userPassword').focus(function(){
        $('#pass-icon').css({'color':'#38F6F9'})
    }).focusout(function(){
        $('#pass-icon').css({'color':'black'})
    })

    $('#userID').keypress(function(){
        if($('#userID').val().length < 3){
            $('#user-error-message').html("Minimum character should be of 3 characters")
            return
        }
        $('#user-error-message').empty();
    })

    $('#userPassword').keypress(function(){
        if($('#userPassword').val().length < 8){
            $('#password-error-message').html("Password should of 8 length")
            return
        }
        $('#password-error-message').empty();
    })
})

