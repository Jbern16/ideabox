$(document).ready(() => {
  $('#ideaList').on('click', '.deleteIdea', function() {
    let clickedButton = this 
    let id = $(this).data("id");
    $.ajax({
      type: "DELETE",
      url: `/api/v1/ideas/${id}`,
      dataType: "dataType",
      success: response => {
        $(clickedButton).parent().remove()
      }
    })
  });
})