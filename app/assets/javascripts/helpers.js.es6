  var prependIdeaLi = function prependIdeaLi(selector, ideaData){
    $(`#${selector}`).prepend(`<li> ${ideaData} </li>`)
  }

  var prependIdeaHeader = function(selector, ideaData){
    $(`#${selector}`).prepend(`<h3> ${ideaData} </h3>`)
  }

  var truncate = function(words){
    let length = 100
    if(words.length > length){
      return words.substring(0, 100) + "..."
    }
    else 
      return words  
  }

  var clearText = function(){
    $("#title").val("")
    $("#body").val("")
  }

  var prependIdea = function(response){
    prependIdeaLi("ideaList", response.data.quality)
    prependIdeaLi("ideaList", truncate(response.data.body))
    prependIdeaHeader("ideaList", response.data.title)
  }
