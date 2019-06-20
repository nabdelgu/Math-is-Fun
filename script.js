function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfil();
    
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
 }   
    
   /* 
    $(".g-signin2").css("display","none");
    $(".login-signup button").css("display","block");
    
    $("#pic").attr('src',profile.getImageUrl());
    $('#email').text(profile.getEmail());
    */
    
     function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              console.log('User signed out.');
        });
     }
    
    
    
