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
var bounds = new google.maps.LatLngBounds();

function addMarker(lat, lng, info, labeltext) {
	var pt = new google.maps.LatLng(lat, lng);
	bounds.extend(pt);

	var marker = new MarkerWithLabel({
		position: pt,
		icon: icon,
		map: map,
		labelContent: labeltext,
		labelAnchor: new google.maps.Point(0, 36),
		labelClass: 'markerlabel',
		labelStyle: {opacity: 0.75}
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
		center: new google.maps.LatLng(0, 0),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		navigationControl: true,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		}
		
	});
			
			
	addMarker(54.152472,11.742843,'<div class="custom-info-window"><h5>MORADA Hotel Arendsee</h5><p>Ostseeallee 30<br>18225 Ostseebad Kühlungsborn</p>Telefon: 03 82 93 / 70-300<br>Hotline: 0 800 / 123 26 26</p><a href="http://arendsee.morada.de" target="blank" class="btn btn-primary btn-sm"><i class="fa fa-home"></i> Homepage</a></div>','MORADA Hotel Arendsee');

	addMarker(54.152277,11.763401,'<div class="custom-info-window"><h5>MORADA Strandhotel Kühlungsborn</h5><p>Rudolf-Breitscheid-Straße<br>18225 Ostseebad Kühlungsborn</p>Telefon: 03 82 93 / 4 31-0<br>Hotline: 0 800 / 123 32 32</p><a href="http://www.strandhotel-kuehlungsborn.de/" target="blank" class="btn btn-primary btn-sm"><i class="fa fa-home"></i> Homepage</a></div>','MORADA Strandhotel Kühlungsborn');

	addMarker(54.151510,11.766070,'<div class="custom-info-window"><h5>MORADA Resort Kühlungsborn</h5><p>Hafenstraße 2<br>18225 Ostseebad Kühlungsborn</p>Telefon: 03 82 93 / 67-0<br>Hotline: 0 800 / 123 12 12</p><a href="http://kuehlungsborn.morada.de" target="blank" class="btn btn-primary btn-sm"><i class="fa fa-home"></i> Homepage</a></div>','MORADA Resort Kühlungsborn');
	
	center = bounds.getCenter();
	map.fitBounds(bounds);

}