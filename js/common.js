// login

$("#log_form").on("submit",function(e){
  e.preventDefault();
  //return false;
      let mailCheck = $("#formGroupExampleInput").val();
      let pwdCheck =  $("#formGroupExampleInput2").val();
        if(mailCheck == ""){
          $('#email_req').text("Please Enter your email!");
        }
        if(pwdCheck == ""){
          $('#pwd_req').text("Please Enter your password!");
        }

        if(mailCheck != ""){
          console.log(true)
        }else if(mailCheck == ""){
          console.log(false);
        }
});


$("#formGroupExampleInput").on('keyup change', function(){
  let mailCheck = $("#formGroupExampleInput").val();
        if(mailCheck != ""){
          $('#email_req').text("");
        }else if(mailCheck == ""){
          $('#email_req').text("Please Enter your email!");
        }
});
$("#formGroupExampleInput2").on('keyup change', function(){  
  let pwdCheck =  $("#formGroupExampleInput2").val();          
        if(pwdCheck != ""){
          $('#pwd_req').text("");
        }else if(pwdCheck == ""){
          $('#pwd_req').text("Please Enter your password!");
        }
});

// register

$("#reg_form").on("submit",function(e){
  e.preventDefault();
  //return false;
    let reg_user = $("#formGroupExampleInput01").val();
    let reg_mail =  $("#formGroupExampleInput02").val();
    let reg_pwd =  $("#formGroupExampleInput03").val();
    let reg_cmfpwd =  $("#formGroupExampleInput04").val();
        if(reg_user == ""){
          $('#user').text("Please Enter your Name!");
        }
        if(reg_mail == ""){
          $('#mail').text("Please Enter your Email!");
        }
        if(reg_pwd == ""){
          $('#pwd').text("Please Enter your Password!");
        }
        if(reg_cmfpwd == ""){
          $('#cmf_pwd').text("Please Enter your Comfirm Password!");
        }
});
$("#formGroupExampleInput01").on('keyup change', function(){
  let reg_user = $("#formGroupExampleInput01").val();
      if(reg_user != ""){
        $('#user').text("");
      }else if(reg_user == ""){
        $('#user').text("Please Enter your Name!");
      }
});
$("#formGroupExampleInput02").on('keyup change', function(){
  let reg_mail =  $("#formGroupExampleInput02").val();
      if(reg_mail != ""){
        $('#mail').text("");
      }else if(reg_mail == ""){
        $('#mail').text("Please Enter your Email!");
      }
});
$("#formGroupExampleInput03").on('keyup change', function(){
  let reg_pwd =  $("#formGroupExampleInput03").val();
      if(reg_pwd != ""){
        $('#pwd').text("");
      }else if(reg_pwd == ""){
        $('#pwd').text("Please Enter your Password!");
      }
});
$("#formGroupExampleInput04").on('keyup change', function(){
  let reg_cmfpwd =  $("#formGroupExampleInput04").val();
      if(reg_cmfpwd != ""){
        $('#cmf_pwd').text("");
      }else if(reg_cmfpwd == ""){
        $('#cmf_pwd').text("Please Enter your Comfirm Password!");
      }
});

// forget password

$("#pwd_form").on("submit",function(e){
  e.preventDefault();
  //return false;
      let forget_pwd = $("#formGroupExampleInput_pwd").val();
        if(forget_pwd == ""){
          $('#pwd').text("Please Enter your Password!");
        }
});


$("#formGroupExampleInput_pwd").on('keyup change', function(){
  let forget_pwd = $("#formGroupExampleInput_pwd").val();
        if(forget_pwd != ""){
          $('#pwd').text("");
        }else if(forget_pwd == ""){
          $('#pwd').text("Please Enter your Password!");
        }
});