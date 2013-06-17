$(document).ready(function(){

	//$('#left_panel').animate({'left' : '+=2%'},2000);

	$('#HomeContents').animate({'marginLeft' : '-=10px', 'top':'+=10px', 'opacity':'1'},500);

	$('#ProjectSlides .AllProjects:gt(0)').hide();

	$('#submenu-item').hide();

	// $("#proj1img1a").hide();
	// $("#proj1img1b").hide();
	// $("#proj1img1c").hide();
	// $("#proj2img2a").hide();
	// $("#proj2img2b").hide();
	// $("#proj3img3a").hide();
	// $("#proj3img3b").hide();
	// $("#proj4img4a").hide();
	// $("#proj4img4b").hide();
	
	// $.colorbox.settings.returnFocus = "false";
	$.colorbox.settings.width = "700px";
	$.colorbox.settings.height = "600px";
	$.colorbox.settings.opacity="0.8";
	$.colorbox.settings.scalePhotos="true";
	$.colorbox.settings.slideshow='true';

	
	$(".proj1img").colorbox({rel:'group1'});
	$(".proj2img").colorbox({rel:'group2'});
	$(".proj3img").colorbox({rel:'group3'});
	$(".proj4img").colorbox({rel:'group4'});
	$(".proj5img").colorbox({rel:'group5'});
	$(".proj6img").colorbox({rel:'group6'});

	// On refresh of the page highlight correct menu option
	//select_menu();

	$("ul.topmenu > li").click(function() {

		// str = $(this).text().replace(/\s/g, '');
		str = $(this).attr("id");
		//alert(str);
		scrollToSection('#'+str, "#" + str+"Section");
	});


	$("#logo-image").click(function() {
		scrollToSection('#Home', "#HomeSection");
	});


	$('.NextProject').click(function() {
	    //$('#ProjectSlides .AllProjects:first-child').fadeOut().next().fadeIn().end().appendTo('#ProjectSlides');
	    $('#ProjectSlides .AllProjects:first-child').fadeOut();
	    $('#ProjectSlides .AllProjects:first-child').next().fadeIn();
	    $('#ProjectSlides .AllProjects:first-child').appendTo('#ProjectSlides');
	});

	$('.PrevProject').click(function() {
	    $('#ProjectSlides .AllProjects:first-child').fadeOut();
	    $('#ProjectSlides .AllProjects:last-child').prependTo('#ProjectSlides');//.fadeOut();
	    $('#ProjectSlides .AllProjects:first-child').fadeIn();
	});
});


function scrollToSection(sectionMenu, section) {
	if ($('body').scrollTop() != $(section).offset().top) 
	{
		//alert(section);
		$('ul.topmenu > li').removeClass("menu-item-selected");
		$('ul.topmenu > li').addClass("menu-item");
		$(sectionMenu ).removeClass("menu-item");
		$(sectionMenu ).addClass("menu-item-selected");
		$('body').animate({scrollTop: $(section).offset().top}, 'slow');
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
	if($('body').scrollTop() >= $(section).offset().top && $('body').scrollTop() < $(nextSection).offset().top )
	{
		//alert(section);
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
	$('.submenu-list').hide('fast');
}

