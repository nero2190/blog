// login

$("#btn_click").on("click",function(e){
  e.preventDefault();
      let mailCheck = $("#userEmail").val();
      let pwdCheck =  $("#userPwd").val();
        if(mailCheck == ""){
          $('#email_req').text("Please Enter your email!");
        }
        if(pwdCheck == ""){
          $('#pwd_req').text("Please Enter your password!");
        }
        if(mailCheck != "" && pwdCheck != ""){
          $('#log_form').submit();
          return true;
        }
        
});


$("#userEmail").on('keyup change', function(){
  let mailCheck = $("#userEmail").val();
        if(mailCheck != ""){
          $('#email_req').text("");
        }else if(mailCheck == ""){
          $('#email_req').text("Please Enter your email!");
        }
});
$("#userPwd").on('keyup change', function(){  
  let pwdCheck =  $("#userPwd").val();          
        if(pwdCheck != ""){
          $('#pwd_req').text("");
        }else if(pwdCheck == ""){
          $('#pwd_req').text("Please Enter your password!");
        }
});

// register

$("#reg_click").on("submit",function(e){
  e.preventDefault();
    let reg_user = $("#userName").val();
    let reg_mail =  $("#urs_email").val();
    let reg_pwd =  $("#urs_password").val();
    let reg_cmfpwd =  $("#urs_cmfpassword").val();
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
        if(reg_user != "" && reg_mail != "" && reg_pwd != "" && reg_cmfpwd != ""){
          $('#reg_form').submit();
          return true;
        }
});
$("#userName").on('keyup change', function(){
  let reg_user = $("#userName").val();
      if(reg_user != ""){
        $('#user').text("");
      }else if(reg_user == ""){
        $('#user').text("Please Enter your Name!");
      }
});
$("#urs_email").on('keyup change', function(){
  let reg_mail =  $("#urs_email").val();
      if(reg_mail != ""){
        $('#mail').text("");
      }else if(reg_mail == ""){
        $('#mail').text("Please Enter your Email!");
      }
});
$("#urs_password").on('keyup change', function(){
  let reg_pwd =  $("#urs_password").val();
      if(reg_pwd != ""){
        $('#pwd').text("");
      }else if(reg_pwd == ""){
        $('#pwd').text("Please Enter your Password!");
      }
});
$("#urs_cmfpassword").on('keyup change', function(){
  let reg_cmfpwd =  $("#urs_cmfpassword").val();
      if(reg_cmfpwd != ""){
        $('#cmf_pwd').text("");
      }else if(reg_cmfpwd == ""){
        $('#cmf_pwd').text("Please Enter your Comfirm Password!");
      }
});

// forget password

$("#for_click").on("submit",function(e){
  e.preventDefault();
      let forget_pwd = $("#forget_mail_pwd").val();
        if(forget_pwd == ""){
          $('#pwd').text("Please Enter your Password!");
        }
        if(forget_pwd != ""){
          $('#pwd_form').submit();
          return true;
        }
});


$("#forget_mail_pwd").on('keyup change', function(){
  let forget_pwd = $("#forget_mail_pwd").val();
        if(forget_pwd != ""){
          $('#pwd').text("");
        }else if(forget_pwd == ""){
          $('#pwd').text("Please Enter your Password!");
        }
});