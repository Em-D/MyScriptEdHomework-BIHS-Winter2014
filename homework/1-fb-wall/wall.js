$(document).ready(function(){
    
    $('#post').click(function(){
       
        var textboxInfo= $('#textbox').val();
        $('#wall').append('<div id="status">' + textboxInfo + '</br> <div class="likeButton"><img class="likeImg" src="http://www.jillianney.com/wp-content/uploads/2012/01/like.png"/>Like</div> </br></div>');
        $('#textbox').val("");
     
        setTimeout(function(){
            $('#status').remove();
        }, 5000);
        
    $('.likeButton').click(function(){
        
        $(this).text("You like this");
        $(this).prepend('<img class="likeImg" src="http://www.jillianney.com/wp-content/uploads/2012/01/like.png"/>');
    });
    
    });   
    
});
