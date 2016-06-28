$(document).ready(function(){
  $('#ideaList').on('click', '.deleteIdea', function() {
    let clickedButton = this 
    console.log(clickedButton)
    let id = $(this).data("id");
    console.log(id)
    $.ajax({
      type: "DELETE",
      url: `/api/v1/ideas/${id}`,
      dataType: "dataType",
      success: function(response) {
        console.log(self)
        $(clickedButton).parent().remove()
      }
    })
  });
})