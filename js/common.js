
$(document).on("submit", "form", function(e){
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
$(document).on('keyup change', function(){
  let mailCheck = $("#formGroupExampleInput").val();
  let pwdCheck =  $("#formGroupExampleInput2").val();
  if(mailCheck != ""){
   $('#email_req').text("");
  }else if(mailCheck == ""){
    $('#email_req').text("Please Enter your email!");
   }
  if(pwdCheck != ""){
   $('#pwd_req').text("");
  }else if(pwdCheck == ""){
    $('#pwd_req').text("Please Enter your password!");
   }
});