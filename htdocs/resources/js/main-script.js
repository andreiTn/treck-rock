/* Contact Map */
var myCenter=new google.maps.LatLng(39.7049962, -105.6975169);
var marker;

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:16,
  scrollwheel:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);



idleTime = 0;
$(document).ready(function(){   
    /* Subscription Form */
	$limit = 5;
	
	if ($.cookie('test_status') != '1') {
		
		function timerIncrement() {
			idleTime = idleTime + 1;
			if (idleTime > $limit) { 
				$('.subs-popup ').show();
				idleTime = 0;
			}
		}
		// Increment the idle time counter every second.
		var idleInterval = setInterval(timerIncrement, 1000); // 1 second

		// Zero the idle timer on mouse movement.
		$(this).mousemove(function (e) {
			idleTime = 0;
		});
		$(this).keypress(function (e) {
			idleTime = 0;
		});
		
		$.cookie('test_status', '1', { expires: 30 });
	}

    /* Navigation Scroll Effect */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);            
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Sticky Nav */
    $('.about').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
            $('.aa').addClass('.sticky-logo');
        } else {
            $('nav').removeClass('sticky');
            $('.aa').removeClass('.sticky-logo');

        }
    }, {
        offset: '80px;'
    });
    
    /* Responsive Nav */
    $(".js--nav-icon").click(function(){
        var nav = $(".main-nav");
        var icon = $(".js--nav-icon i");
        nav.slideToggle(50);
        
        if(icon.hasClass("ion-navicon-round")){
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        }
        else{
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });
    
    /* CTA Button*/
    $('.cta-btn').click(function(){
        $('html, body').animate({
            scrollTop: $('.plans').offset().top
        }, 1000);
    });
    
    
    /* Animations On Scroll */
    $('.js--fadeIn').waypoint(function(direction) {
        $('.js--fadeIn').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });
    
    $('.js--slideInLeft').waypoint(function(direction) {
        $('.js--slideInLeft').addClass('animated slideInLeft');
    }, {
        offset: '50%;'
    });
    
    $('.js--slideInRight').waypoint(function(direction) {
        $('.js--slideInRight').addClass('animated slideInRight');
    }, {
        offset: '50%;'
    });
    
    $('.js--pulse').waypoint(function(direction) {
        $('.js--pulse').addClass('animated pulse');
    }, {
        offset: '50%;'
    });


});