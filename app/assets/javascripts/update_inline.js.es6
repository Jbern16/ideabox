$(document).ready(() => {
  $("#ideaList").on("focus", ".ideaBody", function(){
    let id = $(this).parent().data("id")
    $(this).on("blur", function(){
      let payload = getPayloadInline(id)
      updateIdea(payload, id)
    })
  })


  $("#ideaList").on("focus", ".ideaHeader", function(){
    let id = $(this).parent().data("id")
    $(this).on("blur", function(){
      let payload = getPayloadInline(id)
      updateIdea(payload, id)
    })
  })

  const updateIdea = function(payload, id){
    $.ajax({
      type: "PATCH",
      url: `/api/v1/ideas/${id}`,
      data: payload,
      dataType: "JSON",
      success: response => {
        let text = $(`#body${response.id}`).text()
        $(`#body${response.id}`).text(truncate(text))
      }
    });
  }

  const getPayloadInline = function(id){
    return {
      "body": $(`#body${id}`).text(),
      "title": $(`#header${id}`).text(),
      "quality": $(`#quality${id}`).text(), 
    }
  }
})