(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var physicalStructure = "<a href='/services/assembly.html'><button class='services-button'><span>Assembly</span><img class='iter-icon' src='/assets/images/icons/ASS.jpg'></button></a>" + "<a href='/services/buildings.html'><button class='services-button'><span>Buildings</span><img class='iter-icon' src='/assets/images/icons/BTP.jpg'></button></a>" + "<a href='/services/engineering-and-services.html'><button class='services-button'><span>Engineering and Services</span><img class='iter-icon' src='/assets/images/icons/IS.jpg'></button></a>";

		var tokamak = "<a href='/services/magnets.html'><button class='services-button'><span>Magnets</span><img class='iter-icon' src='/assets/images/icons/MAG.jpg'></button></a>" + "<a href='/services/vacuum-vessel.html'><button class='services-button'><span>Vacuum Vessel</span><img class='iter-icon' src='/assets/images/icons/VV.jpg'></button></a>" + "<a href='/services/cryostat.html'><button class='services-button'><span>Cryostat, Thermal Shield, Vacuum Pumping and Fueling, Cooling Water System</span><img class='iter-icon' src='/assets/images/icons/AUXI.jpg'></button></a>";

		var supportingSystems = "<a href='/services/in-vessel-components.html'><button class='services-button'><span>In Vessel Components</span><img class='iter-icon' src='/assets/images/icons/IVC.jpg'></button></a>" +
		 						"<a href='/services/remote-handling.html'><button class='services-button'><span>Remote handling</span><img class='iter-icon' src='/assets/images/icons/RH.jpg'></button></a>" + "<br>" +
		 						"<a href='/services/cryogenics.html'><button class='services-button'><span>Cryogenics</span><img class='iter-icon' src='/assets/images/icons/CRYO.jpg'></button></a>" + 
		 						"<a href='/services/codac.html'><button class='services-button'><span>CODAC</span><img class='iter-icon' src='/assets/images/icons/CODAC.jpg'></button></a>" +
		 						"<a href='/services/diagnostics.html'><button class='services-button'><span>Diagnostics</span><img class='iter-icon' src='/assets/images/icons/DIAG.jpg'></button></a>" + "<br>" + 
		 						"<a href='/services/heating-systems-current-drive.html'><button class='services-button'><span>Heating Systems and Current Drive</span><img class='iter-icon' src='/assets/images/icons/HS.jpg'></button></a>" +
		 						"<a href='/services/power-supply.html'><button class='services-button'><span>Power Supply</span><img class='iter-icon' src='/assets/images/icons/PS.jpg'></button></a>" + "<br>" +
		 						"<a href='/services/tritium-plant.html'><button class='services-button'><span>Tritium Plant, Hot Cell, Waste Storage and Treatment, Radiological Protection</span><img class='iter-icon' src='/assets/images/icons/IS.jpg'></button></a>";


		var physicalStructureBtn = document.getElementById("physicalStructureButton");

		var tokamakBtn = document.getElementById("tokamakButton");

		var supportingSystemsBtn = document.getElementById("SupportingSystemsButton");

		var options = $.extend({
			title: "",
			description: supportingSystems,
		},prop);
				
		return this.click(function(e){
			if ($(this).attr("id") === "PSB") {
				options.title = "Physical Structure";
				options.description = physicalStructure;
			} else if ($(this).attr("id") === "TB") {
				options.title = "Tokamak";
				options.description = tokamak;
			} else {
				options.title = "Supporting Systems";
				options.description = supportingSystems;
			}
			
			add_block_page();
			add_popup_box();
			add_styles();

			
			$('.paulund_modal_box').fadeIn();
		});
		
		 function add_styles(){			
			
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(/assets/images/fileclose.png) no-repeat',
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'10'
			});
			
		}
		
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 		
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><h2 class="modal-title">' + options.title + '</h2>' + options.description + '</div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);