$(function() {
  var formcreate = $('form[name="createvent"]');
  formcreate[0].onsubmit = savedata;

  $('.form_date').datetimepicker({
    language: 'en',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
  });
});

$(".alert").hide();

savedata = function(event) {
  $(".alert").show();
  event.preventDefault();
}