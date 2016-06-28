$(document).ready(function() {
  $.getJSON("/api/v1/ideas",
    function (data) {
      $.each(data, function (indexInArray, value) {
        var title   =  value.data.title
        var body    =  truncate(value.data.body)
        var quality =  value.data.quality
        prependIdeaLi("ideaList", quality)
        prependIdeaLi("ideaList", body)
        $("#ideaList").prepend(`<h3> ${title} </h3>`)
     });  
    }
  );

  var prependIdeaLi = function(selector, ideaData){
    $(`#${selector}`).prepend(`<li> ${ideaData} </li>`)
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

