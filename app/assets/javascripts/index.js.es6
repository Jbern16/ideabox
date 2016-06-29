$(document).ready(() => {
  $.getJSON("/api/v1/ideas",
    data => {
      $.each(data, function (indexInArray, value) {
        prependIdea(value)
     });  
    }
  );
});

