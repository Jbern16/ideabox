  const prependIdeaBody = function prependIdeaLi(selector, body, id){
     $(`#${selector}`).prepend(`<li id="body${id}" class="ideaBody" contenteditable="true">${body}</li>`)
  }

  const prependIdeaQuality = function prependIdeaLi(selector, quality, id){
     $(`#${selector}`).prepend(`<li class="quality" id="quality${id}">${quality}</li>`)
  }

  const prependIdeaHeader = function(selector, header, id){
    $(`#${selector}`).prepend(`<h3 id="header${id}" class="ideaHeader" contenteditable="true">${header}</h3>`)
  }

  const prependDeleteButton = function(selector, id){
    $(`#${selector}`)
    .prepend(
      `<button type="button" class="deleteIdea" data-id=${id}>
      Delete
      </button>`
    ) 
  }

  const truncate = function(words){
    let length = 100
    if(words.length > length){
      return words.substring(0, 100) + "..."
    }
    else 
      return words  
  }

  const clearText = function(){
    $("#title").val("")
    $("#body").val("")
  }

  const prependVoteButtons = function(selector, response){
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

  
  const createPayload = function(payload, quality){
    return {'body': payload.body, 'title': payload.title, 'quality': quality}  
  }


  const prependIdea = function(response){
    let selector = `idea${response.id}`
    $("#ideaList").prepend(`<div id=${selector} class="eachIdea" data-id=${response.id} data-body=${response.data.body} data-title=${response.data.title}></div>`)
    prependDeleteButton(selector, response.id)
    prependVoteButtons(selector, response)
    prependIdeaQuality(selector, response.data.quality, response.id)
    prependIdeaBody(selector, truncate(response.data.body), response.id)
    prependIdeaHeader(selector, response.data.title, response.id)
  }


