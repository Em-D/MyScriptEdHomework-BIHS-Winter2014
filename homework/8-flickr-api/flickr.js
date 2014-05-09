$(document).ready(function(){

    $('#searchButton').click(function(){
        var currentSearch = $('#searchBox').val();
        $.getJSON("https://api.flickr.com/services/rest/?   method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags="+currentSearch+"&has_geo=1&extras=geo&format=json&jsoncallback=?", test);
    });
    
    function test(data){
        $('#result').empty();
        $.each(data.photos.photo, function(i,item){
          var currentId = item.id;
          var currentServer = item.server;
          var currentFarm = item.farm;
          var currentSecret = item.secret;
          var currentPicLink = "http://farm" + currentFarm + ".staticflickr.com/" + currentServer + "/" + currentId + "_" + currentSecret + ".jpg";
          var currentImg = "<img class='appendImg' + src='"+currentPicLink+"'/>";
          $('#result').append(currentImg);
        });
    }

});
