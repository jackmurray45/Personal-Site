


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
        if ($(this).scrollTop() > 800 && $(".about").css('visibility') == 'hidden') {
        	$(".about").css('visibility','visible').hide();
        	$(".about").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 1800 && $(".projectHeader").css('visibility') == 'hidden') {
        	$(".projectHeader").css('visibility','visible').hide();
        	$(".projectHeader").css('visibility','visible').fadeIn('slow');
        	$(".FabFlix").css('visibility','visible').hide();
        	$(".FabFlix").css('visibility','visible').fadeIn('slow');      
        } 

        if ($(this).scrollTop() > 2900 && $(".UpLift").css('visibility') == 'hidden') {
        	$(".UpLift").css('visibility','visible').hide();
        	$(".UpLift").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 4200 && $(".simpleCooking").css('visibility') == 'hidden') {
        	$(".simpleCooking").css('visibility','visible').hide();
        	$(".simpleCooking").css('visibility','visible').fadeIn('slow');    
        }

        if ($(this).scrollTop() > 5700 && $(".leadership").css('visibility') == 'hidden') {
          $(".leaderHeader").css('visibility','visible').hide();
          $(".leadershipHeader").css('visibility','visible').fadeIn('slow');  
        	$(".leadership").css('visibility','visible').hide();
        	$(".leadership").css('visibility','visible').fadeIn('slow');    
        }    
    });
});



function fadeInAndTime(className, timeFrame){
  $(className).css('visibility','visible').hide();
  $(className).fadeIn(timeFrame);
}

$(function(){
  $(document).ready(function(){

    fadeInAndTime(".first", 2250);
    fadeInAndTime(".navbar", 2250);
    fadeInAndTime(".boldWords", 2250);
    fadeInAndTime(".bold1", 2250);
    setTimeout(function(){fadeInAndTime(".bold2", 2250);},2000);
    setTimeout(function(){fadeInAndTime(".bold3", 2250);},4000);
  })});