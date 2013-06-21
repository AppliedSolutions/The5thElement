$(document).ready(function(){

	//$('#left_panel').animate({'left' : '+=2%'},2000);

	$('#HomeContents').animate({'marginLeft' : '-=10px', 'top':'+=10px', 'opacity':'1'},500);

	$('#submenu-item').hide();

	$.colorbox.settings.width = "700px";
	$.colorbox.settings.height = "500px";
	// $.colorbox.settings.opacity="0.8";
	$.colorbox.settings.scalePhotos="true";
	$.colorbox.settings.slideshow='true';
	$.colorbox.settings.returnFocus='false';
	$.colorbox.settings.trapFocus='false';
	// $.colorbox({
	// 	onComplete : function() {
	// 		alert("Complete!");
	// 		$('.slider').animate({ left: $('.wrapper').attr('left') });	
	// 	}
	// });



	$('.LivingSpaces1').colorbox({rel:'group1'});
	$('.LivingSpaces2').colorbox({rel:'group2'});
	$('.LivingSpaces3').colorbox({rel:'group3'});
	$('.LivingSpaces4').colorbox({rel:'group4'});
	$('.LivingSpaces5').colorbox({rel:'group5'});
	$('.LivingSpaces6').colorbox({rel:'group6'});
	$('.LivingSpaces7').colorbox({rel:'group7'});
	$('.LivingSpaces8').colorbox({rel:'group8'});
	$('.LivingSpaces9').colorbox({rel:'group9'});
	$('.outdoors1').colorbox({rel:'group10'});
	$('.outdoors2').colorbox({rel:'group11'});
	$('.outdoors3').colorbox({rel:'group12'});
	
	$('.worksocial1').colorbox({rel:'group13'});
	$('.worksocial2').colorbox({rel:'group14'});
	$('.worksocial3').colorbox({rel:'group15'});

	// On refresh of the page highlight correct menu option
	//select_menu();

	$("ul.topmenu > li").click(function(event) {
		event.preventDefault();
		str = $(this).attr("id");
		scrollToSection('#'+str, "#" + str+"Section");
	});

	$("ul.submenu-list > li").click(function() {

		str = $(this).attr("id");
		scrollToSubSection('#'+str, "#" + str+"Section");
	});

	$("#logo-image").click(function() {
		scrollToSection('#Home', "#HomeSection");
	});


	// $('.NextProject').click(function() {
	//     //$('#ProjectSlides .AllProjects:first-child').fadeOut().next().fadeIn().end().appendTo('#ProjectSlides');
	//     $('#ProjectSlides .AllProjects:first-child').fadeOut();
	//     $('#ProjectSlides .AllProjects:first-child').next().fadeIn();
	//     $('#ProjectSlides .AllProjects:first-child').appendTo('#ProjectSlides');
	// });

	// $('.PrevProject').click(function() {
	//     $('#ProjectSlides .AllProjects:first-child').fadeOut();
	//     $('#ProjectSlides .AllProjects:last-child').prependTo('#ProjectSlides');//.fadeOut();
	//     $('#ProjectSlides .AllProjects:first-child').fadeIn();
	// });
});


function scrollToSection(sectionMenu, section) {
	if ($('body, html').scrollTop() != $(section).offset().top) 
	{
		$('ul.topmenu > li').removeClass("menu-item-selected");
		$('ul.topmenu > li').addClass("menu-item");
		$(sectionMenu ).removeClass("menu-item");
		$(sectionMenu ).addClass("menu-item-selected");
		$('body, html').animate({scrollTop: $(section).offset().top}, 'slow');
		// if(sectionMenu != "#Projects")
		// {
		// 	$('body').animate({scrollTop: $(section).offset().top}, 'slow');
		// }
		// else
		// {
		// 	$('body').animate({scrollTop: $("#LivingSpacesSection").offset().top}, 'slow');
		// 	$("#LivingSpaces" ).addClass("submenu-item-selected");	
		// }
	}
}

function scrollToSubSection(sectionMenu, section) {
	if ($('body, html').scrollTop() != $(section).offset().top) 
	{
		$('ul.submenu-list > li').removeClass("submenu-item-selected");
		$('ul.submenu-list > li').addClass("submenu-item");
		$(sectionMenu ).removeClass("submenu-item");
		$(sectionMenu ).addClass("submenu-item-selected");
		$('body, html').animate({scrollTop: $(section).offset().top}, 'slow');
	}
}

function select_menu(){
	highlightMenu('#HomeSection','#ProjectsSection');
	highlightMenu('#ProjectsSection','#AboutSection');
	highlightMenu('#AboutSection','#ServicesSection');
	highlightMenu('#ServicesSection','#GetInTouchSection');
	highlightMenu('#GetInTouchSection');
}

function highlightMenu (section, nextSection) {
	if($('body, html').scrollTop() >= $(section).offset().top && $('body, html').scrollTop() < $(nextSection).offset().top )
	{
		$(section).addClass("menu-item-selected");
	}
	else {
		$(section).addClass("menu-item");	
	}
}


function showSubMenu (){
	$('.submenu-list').show('fast');			
}

function hideSubMenu(){
	$('ul.submenu-list > li').removeClass("submenu-item-selected");
	$('ul.submenu-list > li').addClass("submenu-item");
	$('.submenu-list').hide('fast');
}




$(document).bind('cbox_closed', function(){ 
	// alert("Closed"); 

// 	$('.slider').animate({ left: $('.wrapper').attr('left') });	 
	var elementStyle = $.colorbox.element().style;
	elementStyle.position = "relative";
});