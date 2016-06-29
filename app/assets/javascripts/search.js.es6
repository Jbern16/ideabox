$(document).ready(() =>{
  $("#search").on("keyup", function(){
    let word =           $(this).val().toLowerCase()
    let headersAndBody = $("#ideaList").children("div")
                        .children(".ideaBody, .ideaHeader").map(function(){
                          return $(this)
                        })
  
    let not_matched = headersAndBody.filter(function(index, element){
      return !$(element).text().toLowerCase().includes(word)
    })
    let matched = headersAndBody.filter(function(index, element){
      return $(element).text().toLowerCase().includes(word)
    })

    $.each(not_matched, (index, element) => {
      $(element).parent().hide()
    })
    $.each(matched, (index, element) => {
      $(element).parent().show()
    })
  })
})

