$(document).ready(() => {
  $('#newIdea').submit(function(event){
    event.preventDefault()
    var value = $("#newIdea").serialize()
    $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: value,
      dataType: "JSON",
      success: response => {
        prependIdea(response)
        clearText
      }
    });
  })
});