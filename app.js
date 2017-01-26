$(document).ready(function () {

  //your code here

//   $.ajax({
//   url: 'https://randomuser.me/api/?results=10',
//   dataType: 'json',
//   success: function(person) {
//     console.log(person.results[0].picture.large);
//     var b = document.getElementById("pic");
//     console.log(b);
//     var url = person.results[0].picture.large;
//     b.setAttribute("src", url);
//   }
// });

///save user//
// document.querySelector('#register-form').addEventListener('submit', function (e) {
  // prevent the normal submission of the form
  // e.preventDefault();
  // var username = $("#reg_username").val();
  // var password = $("#reg_password").val();
  // var passwordConfirm = $("reg_password_confirm").val();
  // var email = $("#reg_email").val();
  // var fullname = $("#reg_fullname").val();
  // console.log('username', username,password,email,fullname)
  // var formData = {
  //     'username'    : username,
  //     'password'    : password,
  //     'email'       : email,
  //     'fullname'    : fullname
  //
  // };

  // the initial POST request
      //        $.ajax({
      //         type: "POST",
      //         url: 'http://tiny-tiny.herokuapp.com/collections/friendsapp',
      //         data: formData,
      //         dataType: 'json',
      //         success: function(data){
      //           console.log('success',data);
      //         },
       //
       //
      //  });

// console.log("at the bottom of post")
//
//        })
//        $('.login-button').click(function(){
//          console.log("going back to login page");
//          $("#everything").addClass("animated fadeOutUp");
//          $(".mainContainer").addClass('animated fadeInUp');
//        });

$("#demo01").animatedModal();

      var changeWindow = () => {
        window.location = 'localhost:1337/profile'
      }
////sign in //////
      $( "form.pure-form" ).submit(function(e) {
            e.preventDefault();
       console.log("we started from the bottom")
             $.get( "http://tiny-tiny.herokuapp.com/collections/friendsapp", function(data) {
               console.log("inside get");
         var payload = data;
         var username = $("#username").val();
         var password = $("#password").val();
         checkForCredentials();
         function checkForCredentials() {
         var creds = payload.some(function (el) {
          //  console.log(el);
          //  console.log(username);
          //  console.log(password);
           return (el.username === username && el.password === password);
         });
         if (creds) {
          //  changeWindow().then( () => {
          //    console.log('where in the ')
          //  });
           console.log("USERNAME AND PASSWORD MATCH");
           $('.testing2').fadeOut();
            // window.location.replace("http://localhost:3000/profile.html").fadeIn();
            // $(location).attr('href', "http://localhost:3000/profile.html");
            // alert(username);
            $(".hidden").removeClass("hidden");
            $( "#inner" ).append( '<p class = "col-md-4 col-md-offset-4" >hello!'  + username + "</p>" );
            // window.location = "http://localhost:1337/profile.html"
            // $( "#inner" ).append( '<p class = "col-md-4 col-md-offset-4" >hello!'  + username + "</p>" );
            console.log("going to the profile view");
            // function testing(username){
            //   document.getElementById("inner").innerHTML = "Hello " + username;
            // }
            // testing();



         } else {
           console.log("USERNAME AND PASSWORD DON'T MATCH");
           $('#bannerTwotext').append('<div id="innerDiv" style="color:red">Username and Password do not match!</div>');

         }
       }

       } );


 });



 $("#newMember").click(function(){
  //  $('.mainContainer').addClass('animated fadeOutUp');

  setTimeout(function () {
      $('.mainContainer').addClass('animated fadeOutUp');
      $('.hidden').removeClass('hidden').addClass('animated fadeInUp');
    }, 300
  );
console.log("changed view to sign up");

});


$("#alreadyMember").click(function(){

console.log("back to the main page");

});
























});
