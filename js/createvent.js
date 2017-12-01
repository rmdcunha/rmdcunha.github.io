$(function() {
  var formcreate = $('form[name="createvent"]');
  formcreate[0].onsubmit = savedata;

  $('.begindate').datetimepicker({
    language: 'en',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    startDate: new Date(),
    forceParse: 0
  });

  $('.enddate').datetimepicker({
    language: 'en',
    weekStart: 1,
    todayBtn: 1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    startDate: new Date(),
    forceParse: 0
  });

  $('.begindate')
    .datetimepicker()
    .on('changeDate', function(ev) {
      $('.enddate').datetimepicker('setStartDate', ev.date);
    });

  $('.enddate')
    .datetimepicker()
    .on('changeDate', function(ev) {
      $('.begindate').datetimepicker('setEndDate', ev.date);
    });

});

$(".alert").hide();

savedata = function(event) {
  $(".alert").show();
  event.preventDefault();
}
