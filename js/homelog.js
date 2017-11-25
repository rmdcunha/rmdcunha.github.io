$(function() {
  $("#userlink").append(localStorage.getItem('fname') + " " + localStorage.getItem('lname'));
});