/* -------------------------Scripts for 2Preview type carousel ---------------*/
$(function() {
	$.each($('.projsubsection'),function(){

		var subsection = $(this);
		$('#'+subsection.attr('id')).find('.slider').carouFredSel({
			// width: '100%',
			width:$('.wrapper').width(),
			align: false,
			items: 3,
			items: {
				width: $('.wrapper').width() * 0.05,
				height: 500,
				visible: 1,
				minimum: 1
			},
			scroll: {
				items: 1,
				timeoutDuration : 5000,
				onBefore: function(data) {
					$('.slider').animate({ left: $('.wrapper').attr('left') });	
					//	find current and next slide
					var currentSlide = $('.rslide.active', this),
						nextSlide = data.items.visible,
						_width = $('.wrapper').width();
	 
					//	resize currentslide to small version
					currentSlide.stop().animate({
						width: _width * 0.05
					});		
					currentSlide.removeClass( 'active' );
	 
					//	hide current block
					data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
	 
					//	animate clicked slide to large size
					nextSlide.addClass( 'active' );
					nextSlide.stop().animate({
						width: _width * 0.9
					});						
				},
				onAfter: function(data) {
					//	show active slide block
					data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
				}
			},
			onCreate: function(data){
	 			
				//	clone images for better sliding and insert them dynamacly in slider
				var newitems = $('.rslide',this).clone( true ),
					_width = $('.wrapper').width();
	 
				$(this).trigger( 'insertItem', [newitems, newitems.length, false] );
	 
				//	show images 
				$('.rslide', this).fadeIn();
				$('.rslide:first-child', this).addClass( 'active' );
				$('.rslide', this).width( _width * 0.05 );
	 
				//	enlarge first slide
				$('.rslide:first-child', this).animate({
					width: _width * 0.9
				});
	 
				//	show first title block and hide the rest
				$(this).find( '.slide-block' ).hide();
				$(this).find( '.rslide.active .slide-block' ).stop().fadeIn();
			}
		});
	 
		//	Handle click events
		// $('.slider').children().click(function() {
		// 	$('.slider').trigger( 'slideTo', [this] );
		// });
	 
		//	Enable code below if you want to support browser resizing
		$(window).resize(function(){
	 
			var slider = $('.slider'),
				_width = $('.wrapper').width();
	 
			//	show images
			slider.find( '.rslide' ).width( _width * 0.05 );
	 
			//	enlarge first slide
			slider.find( '.rslide.active' ).width( _width * 0.9 );
	 
			//	update item width config
			slider.trigger( 'configuration', ['items.width', _width * 0.05] );
		});

		
	}); // End for each proj sub section

});


