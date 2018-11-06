$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widesreen', 'theme-black', 'effect-menu-slide'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu')
	api.bind('opened', function(){
		$('.hamburger').addClass('active')
	})

});
