$(function() {
  var formregister = $('form[name="register"]');
  formregister[0].onsubmit = savedata;

  $("#createvent").click(function() {
    if (!localStorage.getItem('islogged')) {
      window.location.replace("register.html");
    } else {
      window.location.replace("createvent.html");
    }
  });

  $(".alert").hide();
});

savedata = function(event) {
  var fname = $('#fnameinput').val();
  var lname = $('#lnameinput').val();
  var email = $('#emailinput').val();

  localStorage.setItem('fname', fname);
  localStorage.setItem('lname', lname);
  localStorage.setItem('email', email);

  $(".alert").show();

  event.preventDefault();
}