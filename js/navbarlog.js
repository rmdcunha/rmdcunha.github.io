$(function() {
  var username = localStorage.getItem('fname') + " " + localStorage.getItem('lname');
  $('a#username').append(username + "<span class='caret'></span>");

  $("#logout").click(function() {
    localStorage.setItem('islogged', false);
    window.location.replace("home.html");
  });

  $("#createvent").click(function() {
    window.location.replace("createvent.html");
  });
});