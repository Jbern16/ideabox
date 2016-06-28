$(document).ready(function(){
  $("#ideaList").on("click", ".upvoteIdea", function(){
    var id = $(this).data("id")
    var newQuality = upvote($(this).data("quality"))
    var payload = this.parent().data("idea")
    payload.data.quality = newQuality 
    $.ajax({
      type: "PATCH",
      url: `/api/v1/ideas/${id}`,
      data: payload,
      dataType: "JSON",
      success: function (response) {
        $(`#idea${response.id}`).html
      }
    });
  })

  var qualities = ["Swill", "Plausible", "Genius"]

  var upvote = function(quality){
    if(quality == "Swill" || quality == "Plausible"){
      let next = qualities.indexOf(quality) + 1
      return qualities[next]
    }
    else{
      return quality
    }
  }
})