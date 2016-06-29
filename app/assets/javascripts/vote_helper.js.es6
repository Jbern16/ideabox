var getPayloadVote = function(button){
    return {
      "body":  $(button).parent().parent().data("body"),
      "title": $(button).parent().parent().data("title")
    }
  }

var qualities = ["Swill", "Plausible", "Genius"]

var upvote = function(quality){
  if(quality === "Swill" || quality === "Plausible"){
    let next = qualities.indexOf(quality) + 1
    return qualities[next]
  }
  else{
    return quality
  }
}

var downvote = function(quality){
if(quality === "Genius" || quality === "Plausible"){
  let prev = qualities.indexOf(quality) - 1
  return qualities[prev]
}
else{
  return quality
  }
}