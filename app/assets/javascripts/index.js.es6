$(document).ready(function() {
  $.getJSON("/api/v1/ideas",
    function (data) {
      $.each(data, function (indexInArray, value) {
        var title   =  value.data.title
        var body    =  truncate(value.data.body)
        var quality =  value.data.quality
        $("#ideaList").append(`<h3> ${title} </h3>`)
        appendIdeaLi("ideaList", body)
        appendIdeaLi("ideaList", quality)
     });  
    }
  );

  var appendIdeaLi = function(selector, ideaData){
    $(`#${selector}`).append(`<li> ${ideaData} </li>`)
  }

  var truncate = function(words){
    var length = 100
    if(words.length > length){
      return words.substring(0, 100) + "..."
    }
    else 
      return words  
  }
});

