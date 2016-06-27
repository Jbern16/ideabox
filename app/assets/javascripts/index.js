$(document).ready(function() {
  $.getJSON("/api/v1/ideas",
    function (data) {

      $.each(data, function (indexInArray, value) {
        var title   =  value.data.title
        var body    =  value.data.body
        var quality =  value.data.quality

        $("#ideaList").append("<h3>" + title   + "</h3>")
        $("#ideaList").append("<li>" + body    + "</li>")
        $("#ideaList").append("<li>" + quality + "</li>")
        
     });  
    }
  );
});