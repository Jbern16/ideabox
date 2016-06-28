  var prependIdeaLi = function prependIdeaLi(selector, ideaData){
    $(`#${selector}`).prepend(`<li> ${ideaData} </li>`)
  }

  var prependIdeaHeader = function(selector, ideaData){
    $(`#${selector}`).prepend(`<h3> ${ideaData} </h3>`)
  }

  var prependDeleteButton = function(selector, id){
    $(`#${selector}`)
    .prepend(
      `<button type="button" class="deleteIdea" data-id=${id}>
      Delete
      </button>`
    ) 
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

  var prependVoteButtons = function(selector, response){
    $(`#${selector}`)
    .prepend(
      `<span>
        <button type="button" class="upvoteIdea" data-id=${response.id}, data-quality=${response.quality}>
          Upvote
        </button>
        <button type="button" class="downvoteIdea" data-id=${response.id}, data-quality=${response.quality}>
          Downvote
        </button>
      </span>`
    )}


  var prependIdea = function(response){
    let selector = `idea${response.id}`
    $("#ideaList").prepend(`<div id=${selector} data-idea=${response.data}></div>`)
    prependDeleteButton(selector, response)
    prependVoteButtons(selector, response.id)
    prependIdeaLi(selector, response.data.quality)
    prependIdeaLi(selector, truncate(response.data.body))
    prependIdeaHeader(selector, response.data.title)
  }


