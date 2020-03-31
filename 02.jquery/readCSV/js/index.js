;(function($){
  "use strict";

  var readCSV;

  // Simple way to read data from CSV
  readCSV = function() {
    $.get("video.csv", function(data) {

      var html = "<ul>",
          videoList = data.split("\n");
          videoList.shift();

        videoList.forEach(function getvalues(indexRow) {
          var columns = indexRow.split(",");
          html += "<li>" + columns[2];
          html += "<p>" + columns[1] + "</p>";
          html += "</li>";
        })

      html += "</ul>";
      $("#video_wrap").append(html);
      
    });
    
  }

  $(function(){
    readCSV();
  })
})(jQuery)