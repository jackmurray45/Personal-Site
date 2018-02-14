


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
      $('.fabFlixBox').css({"width":'40%', "top":"50%", "transform":"translateY(-50%)"});
  }

  if($(window).width() < 1107){
      $('.upLiftBox').insertBefore('.upLiftPhotos');
      $('.upLiftBox').css({"width":'80%'});
  }
  if($(window).width() > 1107){
    $('.upLiftBox').insertAfter('.upLiftPhotos');
    $('.upLiftBox').css({"width":'40%'});
  }

  if($(window).width() < 1424){
      $('.simpleCookingBox').css({"width":'80%', "top":"50%", "transform":"translateY(0)", "margin-bottom":"10px", "margin-right": "0px"});

  }
  if($(window).width() > 1424){
      $('.simpleCookingBox').css({"width":'40%', "top":"50%", "transform":"translateY(-50%)", "margin-bottom":"0px","margin-right": "15px"});
  }

  if($(window).width() < 685){

    $('.ffPhoto').css({"width":"95%", "height":(($(window).width()*.95)*.708)})
  }
  if($(window).width() > 685){
    $('.ffPhoto').css({"width":"625px", "height":"400px"});
  }

  if($(window).width() < 895){
    
    $('.desktop').css({"width":"95%", "height":(($(window).width()*.95)*.625)})
  }

  if($(window).width() > 895){
    
    $('.desktop').css({"width":"800px", "height":"500px"})
  }

  if($(window).width() < 855){
    
    $('.leadershipUL li').css({"width":"82.4%", "margin-right":"0px", "margin-left":"0px" , "min-height": "0px"})
  }

  if($(window).width() > 855){
    
    $('.leadershipUL li').css({"width":"700px","margin-right":"25px", "margin-left":"25px", "min-height": "425px"})
  }

  if($(window).width() < 615){
    $('.mobile').css({"width":"50.0%", "height":(($(window).width()*.5)*1.667)})
    $('.tablet').css({"width":"80.0%", "height":(($(window).width()*.8)*1.3333)})
  }

  if($(window).width() > 615){
    $('.mobile').css({"width":"300px", "height":"500px"})
    $('.tablet').css({"width":"450px", "height":"600px"})
  }

  if($(window).width() < 415){
    
    $('.aboutImages img').css({"width":"90.0%","height":(($(window).width()*.9)*1.1667) })
  }

  if($(window).width() > 415){
    
    $('.aboutImages img').css({"width":"300px", "height":"350px"})
  }

  if($(window).width() < 415){
    
    $('.first img').css({"width":"90.0%","height":(($(window).width()*.9)) })
  }

  if($(window).width() > 415){
    
    $('.first img').css({"width":"400px", "height":"400px"})
  }


  if($(window).width() < 385){
    
    $('.upLiftPhotos ul li img').css({"width":"78.0%","height":((($(window).width()*.78)*1.667)),"margin-right": "0px", "margin-left": "0px" })
    $('.upLiftPhotos ul').css({"padding-left":"0px", "padding-right":"0px"});

  }

  if($(window).width() > 385){
    
    $('.upLiftPhotos ul li img').css({"width":"300px", "height":"500px"})


  }

  if($(window).width() < 385){
    
    $('.upLiftPhotos ul li img').css({"width":"78.0%","height":((($(window).width()*.78)*1.667)) })
  }

  

  

}









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

$(document).ready(divReSize);
$(window).resize(divReSize);