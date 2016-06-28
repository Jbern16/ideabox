$(document).ready(function(){
  $('#ideaList').on('click', '.deleteIdea', function() {
    let clickedButton = this 
    let id = $(this).data("id");
    $.ajax({
      type: "DELETE",
      url: `/api/v1/ideas/${id}`,
      dataType: "dataType",
      success: function(response) {
        $(clickedButton).parent().remove()
      }
    })
  });
})