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
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
			
			for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
	
});

$(document).ready(function() {
 
});