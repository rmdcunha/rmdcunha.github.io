var todayDate = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July ", "August", "September", "October", "November", "December"];
var titleDate = '<b>' + '<span class="glyphicon glyphicon-calendar" style="margin-right: 5px;"></span> ' + todayDate.getDate() + ' ' + months[todayDate.getMonth()] + ' ' + todayDate.getFullYear() + '</b>';

$('.form_date').datetimepicker({
  language: 'pt',
  weekStart: 1,
  todayBtn: 1,
  autoclose: 1,
  todayHighlight: 1,
  startView: 2,
  minView: 2,
  startDate: new Date(),
  forceParse: 0
});

var options = {
  valueNames: ['eventdate', 'category', 'district']
};

var eventsList = new List('events', options);

var updateList = function() {
  var values_date = $('#date').val();
  var values_category = $("#sel1").val();
  var values_district = $("#sel2").val();

  eventsList.filter(function(item) {
    if (!values_date == "")
      if (!(values_category == ""))
        if (!(values_district == "")) {
          $("#clearfilter").show();
          return item.values().eventdate == values_date && item.values().category == values_category && item.values().district == values_district;
        }

    if (!values_date == "")
      if (!(values_category == ""))
        if (values_district == "") {
          $("#clearfilter").show();
          return item.values().eventdate == values_date && item.values().category == values_category;
        }

    if (!values_date == "")
      if (values_category == "")
        if (!(values_district == "")) {
          $("#clearfilter").show();
          return item.values().eventdate == values_date && item.values().district == values_district;
        }

    if (values_date == "")
      if (!(values_category == ""))
        if (!(values_district == "")) {
          $("#clearfilter").show();
          return item.values().category == values_category && item.values().district == values_district;
        }

    if (!values_date == "")
      if (values_category == "")
        if (values_district == "") {
          $("#clearfilter").show();
          return item.values().eventdate == values_date;
        }

    if (values_date == "")
      if (!(values_category == ""))
        if (values_district == "") {
          $("#clearfilter").show();
          return item.values().category == values_category;
        }

    if (values_date == "")
      if (values_category == "")
        if (!(values_district == "")) {
          $("#clearfilter").show();
          return item.values().district == values_district;
        }

    if (values_date == "")
      if (values_category == "")
        if (!(values_district == "")) {
          $("#clearfilter").show();
          return false;
        }

    if (values_date == "")
      if (values_category == "")
        if (values_district == "") {
          $("#clearfilter").hide();
          return true;
        }

  });
}

$("input[id='date']").change(updateList);
$("#sel1").change(updateList);
$("#sel2").change(updateList);

$(function() {

  $('#datetimepicker1').datetimepicker();

  $("#clearfilter").hide();
  $("#clearfilter").click(function() {
    $("#clearfilter").hide();
    eventsList.filter();
    $("#date").val("");
    $("#sel1").val("");
    $("#sel2").val("");
  });

  //Search Code
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function(ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function(index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    }
  });
  var data = [{
      label: "Sports Event",
      category: "Events"
    },
    {
      label: "Gatronomy Event",
      category: "Events"
    },
    {
      label: "Exhibition",
      category: "Events"
    },
    {
      label: "Teatro D. Maria II",
      category: "Instituitions"
    },
    {
      label: "Churrasqueira O Rei do Meu",
      category: "Instituitions"
    },
    {
      label: "Altice Arena",
      category: "Instituitions"
    }
  ];

  $("#search").catcomplete({
    delay: 0,
    source: data
  });


});
