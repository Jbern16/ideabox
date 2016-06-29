$(document).ready(() => {
  $('#newIdea').submit(function(event){
    event.preventDefault()
    let value = $("#newIdea").serialize()
    $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      data: value,
      dataType: "JSON",
      success: function(response) {
        prependIdea(response)
        $("#titleCreate").val("")
        $("#bodyCreate").val("")
      }
    });
  })
})