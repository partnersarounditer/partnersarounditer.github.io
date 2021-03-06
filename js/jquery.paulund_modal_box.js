(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var tokamak = "<ul><li><img class='iter-icon' src='/assets/images/icons/MAG.jpg'><a href='/services/magnets.html'>Magnets</a></li><li><img class='iter-icon' src='/assets/images/icons/IVC.jpg'><a href='/services/vacuum-vessel.html'>Vacuum Vessel</li><li><img class='iter-icon' src='/assets/images/icons/AUXI.jpg'><a href='/services/cryostat.html'>Cryostat, Thermal Shield, Vacuum Pumping and Fueling, Cooling Water System</a></li></ul>";

		var supportingSystems = "<ul><li><img class='iter-icon' src='/assets/images/icons/IVC.jpg'><a href='/services/in-vessel-components.html'>In Vessel Components</a></li>" +
		 						"<li><img class='iter-icon' src='/assets/images/icons/RH.jpg'><a href='/services/remote-handling.html'>Remote handling</a></li>" +
		 						"<li><img class='iter-icon' src='/assets/images/icons/CRYO.jpg'><a href='/services/cryogenics.html'>Cryogenics</a></li>" + 
		 						"<li><img class='iter-icon' src='/assets/images/icons/CODAC.jpg'><a href='/services/codac.html'>CODAC</a></li>" +
		 						"<li><img class='iter-icon' src='/assets/images/icons/DIAG.jpg'><a href='/services/diagnostics.html'>Diagnostics</a></li>" + 
		 						"<li><img class='iter-icon' src='/assets/images/icons/HS.jpg'><a href='/services/heating-systems-current-drive.html'>Heating Systems and Current Drive</a></li>" +
		 						"<li><img class='iter-icon' src='/assets/images/icons/PS.jpg'><a href='/services/power-supply.html'>Power Supply</a></li>" +
		 						"<li><img class='iter-icon' src='/assets/images/icons/IS.jpg'><a href='/services/tritium-plant.html'>Tritium Plant, Hot Cell, Waste Storage and Treatment, Radiological Protection</a></li></ul>";


			var options = $.extend({
			title: "",
			description: tokamak, supportingSystems,
		},prop);
				
		return this.click(function(e){
			if ($(this).attr("id") === "TB") {
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
				'background': 'url(/assets/images/fileclose1.png) no-repeat',
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.9)',
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
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><h2 class="modal-title">' + options.title + '</h2><div class="modal_box_inner">' + options.description + '</div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);