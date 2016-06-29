$(document).ready(() => {
  let sorts = [sortIdeasDesc, sortIdeasAsc]
  $("#sort").on("click", function(){
    let ideas = $("#ideaList").children("div").map(function(){
                    return $(this)})
    let properSort = sorts.reverse()[1] 
    replaceWithSorted(properSort(ideas))
  })
})

const sortIdeasDesc = function(ideas){
  return ideas.sort(function(node1, node2){
    let qualities = findQuality(node1, node2) 
    let quality1 = qualities.quality1
    let quality2 = qualities.quality2

    key = sortKey
      if(key()[quality1] > key()[quality2]){
        return 1
      }
      else if(key()[quality1] < key()[quality2]){
        return -1
      }
      else{
        return 0
      }
  })
}

const sortIdeasAsc = function(ideas){
  return ideas.sort(function(node1, node2){
    let qualities = findQuality(node1, node2) 
    let quality1 = qualities.quality1
    let quality2 = qualities.quality2

    key = sortKey
      if(key()[quality1] > key()[quality2]){
        return -1
      }
      else if(key()[quality1] < key()[quality2]){
        return 1
      }
      else{
        return 0
      }
  })
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
