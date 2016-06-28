$(document).ready(function(){

  $("#ideaList").on("click", ".upvoteIdea", function(){
    var self = $(this)
    var id = $(self).data("id")
    var newQuality = upvote($(this).parent().data("quality"))
    var payload = createPayload(getPayload(self), newQuality)
    updateQuality(self, payload, id)
  })

   $("#ideaList").on("click", ".downvoteIdea", function(){
    var self  = $(this)
    var id = $(self).data("id")
    var newQuality = downvote($(this).parent().data("quality"))
    var payload = createPayload(getPayload(self), newQuality)
    updateQuality(self, payload, id)
  })

  var updateQuality = function(button, payload, id){
    $.ajax({
      type: "PATCH",
      url: `/api/v1/ideas/${id}`,
      data: payload,
      dataType: "JSON",
      success: function (response) {
        let quality = response.data.quality
        button.parent().data('quality', quality)
        button.parent().attr('data-quality', quality)
        $(`#quality${id}`).text(quality) 
      }
    });
  }
})