
function pageSection ( sectionTop , sectionBottom, sectionName, menuName, menuStyle, menuSelectedStyle, parentList,carouselName){
	this.sectionTop = sectionTop;
	this.sectionBottom = sectionBottom;
	this.sectionName = sectionName;
	this.menuName = menuName;
	this.menuStyle = menuStyle;
	this.menuSelectedStyle = menuSelectedStyle;
	this.parentList = parentList;
	this.carouselName = carouselName;

};

var sections = new Array();



$(document).ready(function(){

	//$('#left_panel').animate({'left' : '+=2%'},2000);

	// $('.Contents').animate({'marginLeft' : '-=10px', 'top':'+=10px', 'opacity':'1'},500);
	initSections(sections);
	$('#submenu-item').hide();

	$.colorbox.settings.width = "700px";
	$.colorbox.settings.height = "500px";
	// $.colorbox.settings.opacity="0.8";
	$.colorbox.settings.scalePhotos="true";
	$.colorbox.settings.slideshow='true';
	$.colorbox.settings.returnFocus='false';
	$.colorbox.settings.trapFocus='false';

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

	// $("ul.topmenu > li").click(function(event) {
	// 	event.preventDefault();
	// 	str = $(this).attr("id");
	// 	scrollToSection('#'+str, "#" + str+"Section");
	// });

	// $("ul.submenu-list > li").click(function() {

	// 	str = $(this).attr("id");
	// 	scrollToSubSection('#'+str, "#" + str+"Section");
	// });

	// $("#logo-image").click(function() {
	// 	scrollToSection('#Home', "#HomeSection");
	// });
	$("#logo").click(function() {
		scrollToSection(sections[0]);
	});


	$('#About').click(function(){
		scrollToSection(sections[1]);
	});

	$('#Services').click(function(){
		scrollToSection(sections[2]);
	});

	$('#Projects').click(function(){
		scrollToSection(sections[3]);
	});

	$('#LivingSpaces').click(function(){
		scrollToSection(sections[4]);
	});

	$('#Outdoors').click(function(){
		scrollToSection(sections[5]);
	});

	$('#WorkNSocialSpaces').click(function(){
		scrollToSection(sections[6]);
	});

	$('#GetInTouch').click(function(){
		scrollToSection(sections[7]);
	});

});


function scrollToSection(sectionDetails) {
	if ($(document).scrollTop() != sectionDetails.sectionTop) 
	{
		$(sectionDetails.parentList).removeClass(sectionDetails.menuSelectedStyle);
		$(sectionDetails.parentList).addClass(sectionDetails.menuStyle);
		$(sectionDetails.menuName ).removeClass(sectionDetails.menuStyle);
		$(sectionDetails.menuName ).addClass(sectionDetails.menuSelectedStyle);
		// $(document).animate({scrollTop:  sectionDetails.sectionTop}, 'slow');
		$('body, html').animate({scrollTop:  sectionDetails.sectionTop}, 'slow');
		// $.each($('.projsubsection'),function(){
		// 	var subsection = $(this);
		// 	$('#'+subsection.attr('id')).find('.slider').trigger("pause");
		// });

		$("#LivingSpacesSlider").trigger("pause");
		$("#OutdoorsSlider").trigger("pause");
		$("#WorkNSocialSpacesSlider").trigger("pause");

		if(sectionDetails.carouselName != null)
		{
			$(sectionDetails.carouselName).trigger("resume");
		}
	}
}


// $(window).scroll(function(){

	// var docTop = $(document).scrollTop();
// 	for (i=0;i<sections.length;i++)
// 	{
// 		if(docTop >= sections[i].sectionTop && docTop < sections[i].sectionBottom )
// 		{
// 			scrollToSection(sections[i]);
// 		}
// 	}
// });





// function scrollToSection(sectionMenu, section) {
// 	if ($('body').scrollTop() != $(section).offset().top) 
// 	{
// 		$('ul.topmenu > li').removeClass("menu-item-selected");
// 		$('ul.topmenu > li').addClass("menu-item");
// 		$(sectionMenu ).removeClass("menu-item");
// 		$(sectionMenu ).addClass("menu-item-selected");
// 		$('body, html').animate({scrollTop: $(section).offset().top}, 'slow');
// 	}
// }

// function scrollToSubSection(sectionMenu, section) {
// 	if ($('body').scrollTop() != $(section).offset().top) 
// 	{
// 		$('ul.submenu-list > li').removeClass("submenu-item-selected");
// 		$('ul.submenu-list > li').addClass("submenu-item");
// 		$(sectionMenu ).removeClass("submenu-item");
// 		$(sectionMenu ).addClass("submenu-item-selected");
// 		$('body, html').animate({scrollTop: $(section).offset().top}, 'slow');
// 	}
// }

// On refresh of the page highlight correct menu option
// $(window).bind('beforeunload', function(){ 
// 	var docTop = $(document).scrollTop();
// 	for (i=0;i<sections.length;i++)
// 	{
// 		if(docTop >= sections[i].sectionTop && docTop < sections[i].sectionBottom )
// 		{
// 			scrollToSection(sections[i]);
// 		}
// 	}
// });


// $(window).scroll(function(){
// 	select_menu();
// });

// function select_menu(){
// 	highlightMenu('#Home','#About');
// 	highlightMenu('#About','#Services');
// 	highlightMenu('#Services','#Projects');
// 	highlightMenu('#Projects','#GetInTouch');
// 	highlightMenu('#GetInTouch',null);
// }

// function highlightMenu (section, nextSection) {
// 	if($('body').scrollTop() >= $(section+"Section").offset().top && $('body').scrollTop() < $(nextSection+"Section").offset().top )
// 	{
// 		$(section).removeClass("menu-item");
// 		$(section).addClass("menu-item-selected");
// 	}
// 	else
// 	{
// 		$(section).removeClass("menu-item-selected");
// 		$(section).addClass("menu-item");	
// 	}
// }


function showSubMenu (){
	$('.submenu-list').show('fast');			
}

function hideSubMenu(){
	$('ul.submenu-list > li').removeClass("submenu-item-selected");
	$('ul.submenu-list > li').addClass("submenu-item");
	$('.submenu-list').hide('fast');
}




$(document).bind('cbox_closed', function(){ 
	// var elementStyle = $.colorbox.element().style;
	// if(elementStyle != null)
	// 	elementStyle.width = "770px";
	// 	elementStyle.position = "relative";
	if($(".slider").style !=  null)
		$(".slider").style.width = "770px";
});

	function initSections(sections){
	sections[0] = new pageSection($("#HomeSection").offset().top, 
									$("#AboutSection").offset().top,
									"#HomeSection",
									"#Home",
									"menu-item",
									"menu-item-selected",
									"ul.topmenu > li",
									null);

	sections[1] = new pageSection($("#AboutSection").offset().top, 
									$("#ServicesSection").offset().top,
									"#AboutSection",
									"#About",
									"menu-item",
									"menu-item-selected",
									"ul.topmenu > li",
									null);

	sections[2] = new pageSection($("#ServicesSection").offset().top, 
									$("#ProjectsSection").offset().top,
									"#ServicesSection",
									"#Services",
									"menu-item",
									"menu-item-selected",
									"ul.topmenu > li",
									null);

	sections[3] = new pageSection($("#ProjectsSection").offset().top, 
									$("#LivingSpacesSection").offset().top,
									"#ProjectsSection",
									"#Projects",
									"menu-item",
									"menu-item-selected",
									"ul.topmenu > li",
									null);

	sections[4] = new pageSection($("#LivingSpacesSection").offset().top, 
									$("#OutdoorsSection").offset().top,
									"#LivingSpacesSection",
									"#LivingSpaces",
									"submenu-item",
									"submenu-item-selected",
									"ul.submenu-list > li",
									"#LivingSpacesSlider");

	sections[5] = new pageSection($("#OutdoorsSection").offset().top, 
									$("#WorkNSocialSpacesSection").offset().top,
									"#OutdoorsSection",
									"#Outdoors",
									"submenu-item",
									"submenu-item-selected",
									"ul.submenu-list > li",
									"#OutdoorsSlider");

	sections[6] = new pageSection($("#WorkNSocialSpacesSection").offset().top, 
									$("#GetInTouchSection").offset().top,
									"#WorkNSocialSpacesSection",
									"#WorkNSocialSpaces",
									"submenu-item",
									"submenu-item-selected",
									"ul.submenu-list > li",
									"#WorkNSocialSpacesSlider");

	sections[7] = new pageSection($("#GetInTouchSection").offset().top, 
									9999999,
									"#GetInTouchSection",
									"#GetInTouch",
									"menu-item",
									"menu-item-selected",
									"ul.topmenu > li",
									null);
}
