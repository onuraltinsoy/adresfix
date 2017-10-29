## jQuery adresfix google maps geocode api parser ##
**parsing response of google maps geocode api for html form elements. This plugin is useful for invoice and shipping forms.**
### required##
 - Google Maps Geocode API Key
 - Google Maps Embed API Key
 - jQuery Javascript Library
 - Font Awesome Icon Library
 - Bootstrap (Optional)
 
### Install##

> Create HTML5 document that including adresfix stylesheet and jQuery plugin, don't forget font awesome

    <!-- font awesome CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- adresfix CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/jquery.adresfix.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    <script type="text/javascript" src="assets/js/jquery.adresfix.js"></script>

> add search and response forms

    <div class="container">
    	<div class="row">
    		<div class="col-md-8 mx-auto my-2">
    			<form id="adresfix-search">
    				<div class="adresfix-form-group">
    					<input type="search" name="address" placeholder="search" class="form-control">
    				</div>
    				<button class="btn btn-outline-success my-2 float-right" type="submit">Search</button>
    			</form>
    		</div>
    	</div>
		<h2 class="text-center">Response</h2>
    	<div class="row">
    		
    		
    			<div class="col-md-6">
		    		<form id="adresfix-response">
		    			<div class="form-group">
		    				<label>Full Address</label>
		    				<textarea class="form-control full-address"></textarea>
		    			</div>

		    			<div class="form-group">
		    				<label>Block</label>
		    				<input type="text"class="form-control block">
		    			</div>

		    			<div class="form-group">
		    				<label>Street</label>
		    				<input type="text" class="form-control street">
		    			</div>

		    			<div class="form-group">
		    				<label>District</label>
		    				<input type="text" class="form-control district">
		    			</div>

		    			<div class="form-group">
		    				<label>County</label>
		    				<input type="text" class="form-control county">
		    			</div>

		    			<div class="form-group">
		    				<label>Zip Code</label>
		    				<input type="text" class="form-control zip">
		    			</div>

		    			<div class="form-group">
		    				<label>City</label>
		    				<input type="text" class="form-control city">
		    			</div>

		    			<div class="form-group">
		    				<label>Country</label>
		    				<input type="text" class="form-control country">
		    			</div>
		    		</form>
    			</div>
    			<div class="col-md-6"><div class="map"></div></div>
    		
    	</div>
    </div>

> finally call the adresfix plugin

    <script type="text/javascript">
        $(document).adresfix({
            mapsKey: [YOUR API KEY]
        });
    </script>

> index.html is full template sample

### Options##

    mapsKey: Google API Key (required)
    searchForm: search form element in DOM, default is #adresfix-search,
	responseForm: response form element in DOM, default is #adresfix-response,
	responseInputBlock: input text element for building in DOM, default is .block,
	responseInputStreet: input text element for street in DOM, default is .street,
	responseInputDistrict: input text element for district in DOM, default is .district,
	responseInputCounty: input text element for county in DOM, default is .county,
	responseInputCity: input text element for city in DOM, default is .city,
	responseInputCountry: input text element for country in DOM, default is .country,
	responseInputZip: input text element for zip code in DOM, default is .zip,
	responseTextFullAddress: textarea element for full address in DOM, default is .full-address,
	map: element for embed map in DOM, default is .map