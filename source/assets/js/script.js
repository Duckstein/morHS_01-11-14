$(document).ready(function(){
	
	$('#custom_carousel').on('slide.bs.carousel', function (evt) {
		$('#custom_carousel .controls li.active').removeClass('active');
		$('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
	})
	
	$.simpleWeather({
		location: 'Kuehlungsborn Ost, MV',
		woeid: '',
		unit: 'c',
		success: function(weather) {
			html = '<h2><i class="wetter icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			html += '<p>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</p>';
  
			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
	
});

$(document).ready(function() {
 
});

var icon = new google.maps.MarkerImage("assets/img/ui/mapneedle-metrored.png",
	new google.maps.Size(32, 32),
	new google.maps.Point(0, 0),
	new google.maps.Point(16, 32));
var map = null;
var currentPopup;


function addMarker(lat, lng, info) {
	var pt = new google.maps.LatLng(lat, lng);

	var marker = new google.maps.Marker({
		position: pt,
		icon: icon,
		map: map
	});
	
	var popup = new google.maps.InfoWindow({
		content: info,
		maxWidth: 300
	});
	
	google.maps.event.addListener(marker, "click", function() {
		
		if (currentPopup != null) {
			currentPopup.close();
			currentPopup = null;
		}
		
		popup.open(map, marker);
		currentPopup = popup;
		
	});
	
	google.maps.event.addListener(popup, "closeclick", function() {
		//* map.panTo(center); *//
		currentPopup = null;
	});
	
}

function initialize() {
	
	map = new google.maps.Map(document.getElementById("tripmap"), {
		center: new google.maps.LatLng(54.153408, 11.754867),
		scrollwheel: false,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		}
		
	});
			
			
	addMarker(54.152472,11.742843,'<div id="content"><div id="siteNotice"></div><h5 id="firstHeading" class="firstHeading">MORADA Hotel Arendsee</h5><div id="bodyContent"><p>Zoo Rostock - Tierwelten entdecken und Abenteuer erleben</p></div></div>');

	addMarker(54.152277,11.763401,'<div id="content"><div id="siteNotice"></div><h5 id="firstHeading" class="firstHeading">MORADA Strandhotel Kühlungsborn</h5><div id="bodyContent"><p>Exotische V&ouml;gel und Co. hautnah erleben</p></div></div>');

	addMarker(54.151510,11.766070,'<div id="content"><div id="siteNotice"></div><h5 id="firstHeading" class="firstHeading">MORADA Resort Kühlungsborn</h5><div id="bodyContent"><p>Geschichte der St.-Marien-Kirche in Rostock</p></div></div>');

}