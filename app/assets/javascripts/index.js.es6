$(document).ready(function() {
  $.getJSON("/api/v1/ideas",
    function (data) {
      $.each(data, function (indexInArray, value) {
        prependIdea(value)
     });  
    }
  );
});

