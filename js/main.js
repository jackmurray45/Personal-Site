


$(document).ready(function(){
	
})



$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function(){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 650 && $(".about").css('visibility') == 'hidden') {
        	$(".about").css('visibility','visible').hide();
        	$(".about").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 1750 && $(".projectHeader").css('visibility') == 'hidden') {
        	$(".projectHeader").css('visibility','visible').hide();
        	$(".projectHeader").css('visibility','visible').fadeIn('slow');
        	$(".FabFlix").css('visibility','visible').hide();
        	$(".FabFlix").css('visibility','visible').fadeIn('slow');      
        } 

        if ($(this).scrollTop() > 3150 && $(".UpLift").css('visibility') == 'hidden') {
        	$(".UpLift").css('visibility','visible').hide();
        	$(".UpLift").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 3950 && $(".simpleCooking").css('visibility') == 'hidden') {
        	$(".simpleCooking").css('visibility','visible').hide();
        	$(".simpleCooking").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 5550 && $(".leadership").css('visibility') == 'hidden') {
          $(".leaderHeader").css('visibility','visible').hide();
          $(".leadershipHeader").css('visibility','visible').fadeIn('slow');  
        	$(".leadership").css('visibility','visible').hide();
        	$(".leadership").css('visibility','visible').fadeIn('slow');    
        }    
    });
});



function divReSize(){
  if($(window).width() < 1331){
      $('.aboutText').css({"width":'80%'});
  }
  if($(window).width() > 1331){
      $('.aboutText').css({"width":'40%'});
  }

   if($(window).width() < 1224){
      $('.fabFlixBox').css({"width":'80%', "top":"0", "transform":"translateY(0%)"});
  }
  if($(window).width() > 1224){
      $('.fabFlixBox').css({"width":'40%', "top":"50%", "transform":"translateY(-100%)"});
  }

  if($(window).width() < 1107){
      $('.upliftbox').insertBefore('.upLiftPhotos');
      $('.upliftbox').css({"width":'80%'});
  }
  if($(window).width() > 1107){
    $('.upliftbox').insertAfter('.upLiftPhotos');
    $('.upliftbox').css({"width":'40%'});
  }

  if($(window).width() < 1424){
      $('.simpleCookingBox').css({"width":'80%', "top":"50%", "transform":"translateY(-50%)"});
  }
  if($(window).width() > 1424){
      $('.simpleCookingBox').css({"width":'40%', "top":"50%", "transform":"translateY(-100%)"});
  }

}

$(document).ready(divReSize);
$(window).resize(divReSize);







function fadeInAndTime(className, timeFrame){
  $(className).css('visibility','visible').hide();
  $(className).fadeIn(timeFrame);
}

$(function(){
  $(document).ready(function(){

    fadeInAndTime(".first", 2250);
    fadeInAndTime(".navbar", 2250);
    fadeInAndTime(".boldWords", 2250);
    setTimeout(function(){fadeInAndTime(".bold1", 2250);},2250);
    setTimeout(function(){fadeInAndTime(".bold2", 2250);},4000);
    setTimeout(function(){fadeInAndTime(".bold3", 2250);},5750);
  })});