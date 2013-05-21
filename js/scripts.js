$(document).ready(function(){

	//$('#left_panel').animate({'left' : '+=2%'},2000);

	$('#HomeContents').animate({'marginLeft' : '-=10px', 'top':'+=10px', 'opacity':'1'},500);

	$('#ProjectSlides .AllProjects:gt(0)').hide();

	$("#proj1img1a").hide();
	$("#proj1img1b").hide();
	$("#proj1img1c").hide();
	$("#proj2img2a").hide();
	$("#proj2img2b").hide();
	$("#proj3img3a").hide();
	$("#proj3img3b").hide();
	$("#proj4img4a").hide();
	$("#proj4img4b").hide();
	
	// $.colorbox.settings.returnFocus = "false";
	$.colorbox.settings.width = "600px";
	$.colorbox.settings.height = "600px";
	$.colorbox.settings.opacity="0.8";
	$.colorbox.settings.scalePhotos="true";
	$.colorbox.settings.slideshow='true';

	$(".proj2img").colorbox({rel:'group2'});
	$(".proj1img").colorbox({rel:'group1'});
	$(".proj3img").colorbox({rel:'group3'});
	$(".proj4img").colorbox({rel:'group4'});
	

	// On refresh of the page highlight correct menu option
	//select_menu();

	$("#menu li").click(function() {

		str = $(this).text().replace(/\s/g, '');
		scrollToSection('#'+str);
	});


	$("#logo-image").click(function() {
		scrollToSection('#Home');
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


function scrollToSection(section) {
	if ($('body').scrollTop() != $(section).offset().top) 
	{
		$('#menu li').removeClass("menu-item-selected");
		$('#menu li').addClass("menu-item");
		$(section + '-menu-item').removeClass("menu-item");
		$(section + '-menu-item').addClass("menu-item-selected");
		$('body').animate({scrollTop: $(section).offset().top}, 'slow');
	}
}

function select_menu(){
	highlightMenu('#Home');
	highlightMenu('#Projects');
	highlightMenu('#About');
	highlightMenu('#Services');
	highlightMenu('#GetInTouch');
}

function highlightMenu (section) {
	if($('body').scrollTop() == $(section).offset().top)
	{
		//alert(section);
		$(section + '-menu-item').addClass("menu-item-selected");
	}
	else {
		$(section + '-menu-item').addClass("menu-item");	
	}
}


