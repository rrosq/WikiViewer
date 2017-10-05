$("#button").on("click", function(){
    var searchQuery = $('#search').val();
    console.log(searchQuery);
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchQuery +
        "&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR){
  
        for(var i = 0; i< data[1].length; i++) {
          $("#results").prepend("<div><a href="+data[3][i]+" target='blank'><h2>" + data[1][i]+ "</h2>" + "</a></div>");
        }
      }
    });
  });
  
  $("#search").keyup(function(event){
      if(event.keyCode == 13){
          $("#button").click();
      }
  });