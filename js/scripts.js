(function($) {
    "use strict";
    
    /*==============================
        Learning
    ==============================*/
    function Learning() {
        var $navListBody = $('.top-nav-list').find('.list-item-body');
        var width = $navListBody.closest('.top-nav-list').width() - 1;
        $navListBody.width(width);	
		//Enable swiping...
		$("body").swipe( {
			//Generic swipe handler for all directions
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				if(direction=="right")
				{	
					if ($("#zel").hasClass('active') == false) {
						$('.top-nav-list').children('li').removeClass('active');
					}
					$("#zel").toggleClass('active');
					
				}
				else if(direction=="left")
				{		
				    
					if ($("#zel").hasClass('active') == false) {
						$('.top-nav-list').children('li').removeClass('active');
					}
					$("#zel").toggleClass('active');
					
					
				}
				$("#test").text("You swiped " + direction +"\n"+fingerCount);
				
			},
			
		   threshold:5
		});
		
		$('.outline-learn').click(function() {
			console.log('clicked', this);
			
		});

		
	$('.top-nav-list').find('.outline-learn, .discussion-learn, .note-learn').on('click', '> a', function(e) {
            e.preventDefault();
            if ($(this).parent().hasClass('active') == false) {
                $('.top-nav-list').children('li').removeClass('active');
            }
            $(this).parent().toggleClass('active');
			console.log($(this).parent().attr('id'));
            if ($(this).parent().hasClass('active')) {
                $('.learning-section')
                    .addClass('learning-section-fly')
                    .css('paddingRight', width);
            } else {
                $('.learning-section')
                    .removeClass('learning-section-fly')
                    .css('paddingRight', '0');
            }
        });
		
    }





    $(document).ready(function() {
        Learning();	        
    });
    
    
    

})(jQuery);