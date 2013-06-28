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
