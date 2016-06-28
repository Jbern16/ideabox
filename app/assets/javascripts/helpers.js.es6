  var prependIdeaBody = function prependIdeaLi(selector, body, id){
     $(`#${selector}`).prepend(`<li id="body${id}"> ${body} </li>`)
  }

  var prependIdeaQuality = function prependIdeaLi(selector, quality, id){
     $(`#${selector}`).prepend(`<li id="quality${id}"> ${quality} </li>`)
  }

  var prependIdeaHeader = function(selector, header, id){
    $(`#${selector}`).prepend(`<h3 id="header${id}"> ${header} </h3>`)
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
      `<span data-quality=${response.data.quality}>
        <button type="button" class="upvoteIdea" data-id=${response.id}>
          Upvote
        </button>
        <button type="button" class="downvoteIdea" data-id=${response.id}>
          Downvote
        </button>
      </span>`
    )}

  
  var createPayload = function(payload, quality){
    return {'body': payload.body, 'title': payload.title, 'quality': quality}  
  }


  var prependIdea = function(response){
    let selector = `idea${response.id}`
    $("#ideaList").prepend(`<div id=${selector} data-body=${response.data.body} data-title=${response.data.title}></div>`)
    prependDeleteButton(selector, response)
    prependVoteButtons(selector, response)
    prependIdeaQuality(selector, response.data.quality, response.id)
    prependIdeaBody(selector, truncate(response.data.body), response.id)
    prependIdeaHeader(selector, response.data.title, response.id)
  }


