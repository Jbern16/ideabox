$(document).ready(function() {
  $('#newIdea').submit(function(event){
    event.preventDefault()
    var value = $("#newIdea").serialize()
    $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: value,
      dataType: "JSON",
      success: function (response) {
        prependIdea(response)
        $("#title").val("")
        $("#body").val("")
      }
    });
  })

  var prependIdea = function(response){
    $("#ideaList").prepend(`<li> ${response.data.quality} </li>`)
    $("#ideaList").prepend(`<li> ${response.data.body} </li>`)
    $("#ideaList").prepend(`<h3> ${response.data.title} </h3>`)
  }
});