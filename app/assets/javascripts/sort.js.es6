$(document).ready(() => {
  let sorts = [sortIdeasDesc, sortIdeasAsc]
  let texts = ["See Your Worst Ideas", "See Your Best Ideas"]
  $("#sort").on("click", function(){
    let ideas = $("#ideaList").children("div").map(function(){
                    return $(this)})
    let properSort = sorts.reverse()[1]
    replaceWithSorted(properSort(ideas))
    $(this).text(texts.reverse()[1])
  })
})

const sortIdeas = function(ideas, order){
  return ideas.sort(function(node1, node2){
    let qualities = findQuality(node1, node2)
    let quality1 = qualities.quality1
    let quality2 = qualities.quality2
    let key = sortKey
    let operator = 0
      if(key()[quality1] > key()[quality2]){
        operator = 1
      }
      else if(key()[quality1] < key()[quality2]){
        operator = -1
      }
      if (order === "Asc") {
        operator = operator * -1
      }
      return operator
  })
}

const sortIdeasDesc = function(ideas){
  return sortIdeas(ideas, "Desc")
}

const sortIdeasAsc = function(ideas){
  return sortIdeas(ideas, "Asc")
}

const findQuality = function(node1, node2){
  return {"quality1": $(node1).children(".quality").text(),
          "quality2": $(node2).children(".quality").text()}
}

const sortKey = function(){
  return { "Swill": 0,
          "Plausible": 1,
          "Genius": 2 }
}

const replaceWithSorted = function(sorted){
  $("#ideaList").children("div").remove()
  $.each(sorted, function(index, e) {
    $("#ideaList").prepend(e[0])
  });
}
