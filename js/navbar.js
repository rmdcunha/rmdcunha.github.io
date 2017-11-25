$(function() {
  $("#createvent").click(function() {
    window.location.replace("register.html");
  });

  var formlogin = $('form[name="login"]');
  formlogin[0].onsubmit = function(event) {
    window.location.replace("homelog.html");
    localStorage.setItem('islogged', true);
    event.preventDefault();
  };
});