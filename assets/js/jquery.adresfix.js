//plugin by Onur Altınsoy
//adresfix 1.0.0

(function ($) {
	$.fn.adresfix = function (options) {
		var defaults = {
			searchForm: $('#adresfix-search'),
			responseForm: $('#adresfix-response'),
			responseInputBlock: $('.block'),
			responseInputStreet: $('.street'),
			responseInputDistrict: $('.district'),
			responseInputCounty: $('.county'),
			responseInputCity: $('.city'),
			responseInputCountry: $('.country'),
			responseInputZip: $('.zip'),
			responseTextFullAddress: $('.full-address'),
			map: $('.map')
		};

		var options = $.extend(defaults, options);

		var responseObj = [];

		

		$(document).on('submit', options.searchForm, function(e){
			e.preventDefault();
			var address = options.searchForm.find('input[name="address"]').val();
			$.ajax({
				type: 	'post',
				url: 	'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + options.mapsKey,
				success:function(response, textStatus, xhr){
					var suggest = '';
					for (var i=0; i<response.results.length; i++) {
						suggest += '<li>' + response.results[i].formatted_address + '</li>';
					}
					$('.adresfix-form-group').append('<div class="adresfix-suggest"><span><i class="fa fa-close"></i></span>' + suggest + '</div>');
					responseObj = response;
					console.log(response);
				}
			});
		});

		$(document).on('click', '.adresfix-suggest span', function () {
			$(this).parent().remove();
		});

		$(document).on('focus', '.adresfix-form-group input[name=address]', function () {
			$('.adresfix-suggest').remove();
		});

		$(document).on('click', '.adresfix-suggest li', function (index) {
			var i = $('.adresfix-suggest li').index(this);
			var addressComponents = responseObj.results[i].address_components;
			var location = responseObj.results[i].geometry.location;

			options.map.html('<iframe src="https://www.google.com/maps/embed/v1/place?key=' + options.mapsKey + '&q=' + $(this).text() + '"></iframe>');

			options.responseForm.find('input').val('');
			options.responseForm.find('textarea').empty();

			options.responseTextFullAddress.text($(this).text());

			for (var j=0; j<addressComponents.length; j++) {
				if (addressComponents[j].types[0] == 'administrative_area_level_3' || addressComponents[j].types[0] == 'administrative_area_level_2') {
					options.responseInputCounty.val(addressComponents[j].long_name);
				} else if (addressComponents[j].types[0] == 'administrative_area_level_1') {
					options.responseInputCity.val(addressComponents[j].long_name);
				} else if (addressComponents[j].types[0] == 'administrative_area_level_4' || addressComponents[j].types[0] == 'locality') {
					options.responseInputDistrict.val(addressComponents[j].long_name);
				}  else if (addressComponents[j].types[0] == 'country') {
					options.responseInputCountry.val(addressComponents[j].long_name);
				} else if (addressComponents[j].types[0] == 'postal_code') {
					options.responseInputZip.val(addressComponents[j].long_name);
				} else if (addressComponents[j].types[0] == 'street_number') {
					options.responseInputBlock.val(addressComponents[j].long_name);
				} else if (addressComponents[j].types[0] == 'route') {
					options.responseInputStreet.val(addressComponents[j].long_name);
				}
			}
		});
	};
})(jQuery);