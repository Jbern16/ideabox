$(document).ready(() => {

  $("#ideaList").on("click", ".upvoteIdea", function(){
    let self = $(this)
    let id = $(self).data("id")
    let newQuality = upvote($(this).parent().data("quality"))
    let payload = createPayload(getPayloadVote(self), newQuality)
    updateQuality(self, payload, id)
  })

   $("#ideaList").on("click", ".downvoteIdea", function(){
    let self  = $(this)
    let id = $(self).data("id")
    let newQuality = downvote($(this).parent().data("quality"))
    let payload = createPayload(getPayloadVote(self), newQuality)
    updateQuality(self, payload, id)
  })

  const updateQuality = function(button, payload, id){
    $.ajax({
      type: "PATCH",
      url: `/api/v1/ideas/${id}`,
      data: payload,
      dataType: "JSON",
      success: response => {
        let quality = response.data.quality
        button.parent().data('quality', quality)
        button.parent().attr('data-quality', quality)
        $(`#quality${id}`).text(quality) 
      }
    });
  }
})