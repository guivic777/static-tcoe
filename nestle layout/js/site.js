$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  
  console.log('Hello world.');
});

$('a#who').click(function(e) {
	if($('a#why div').hasClass('active')){
		$('a#why').click();
		$('a#who div').toggleClass( 'active');
		
		setTimeout(function(){
			$('div.nav-drawer-container.who').slideToggle('fast');
		}, 350);

	} else if($('a#how div').hasClass('active')){
		$('a#how').click();
		$('a#who div').toggleClass( 'active');
		
		setTimeout(function(){
			$('div.nav-drawer-container.who').slideToggle('fast');
		}, 350);

	} else {
		$('a#who div').toggleClass( 'active');
		$('div.nav-drawer-container.who').slideToggle('fast');
	}
});

$('a#why').click(function(e) {
	if($('a#who div').hasClass('active')){
		$('a#who').click();
		$('a#why div').toggleClass( 'active');
		
		setTimeout(function(){
			$('div.nav-drawer-container.why').slideToggle('fast');
		}, 350);

	} else if($('a#how div').hasClass('active')){
		$('a#how').click();
		$('a#why div').toggleClass( 'active');

		setTimeout(function(){
			$('div.nav-drawer-container.why').slideToggle('fast');
		}, 350);

	} else {
		$('a#why div').toggleClass( 'active');
		$('div.nav-drawer-container.why').slideToggle('fast');
	}
});

$('a#how').click(function(e) {
	if($('a#who div').hasClass('active')){
		$('a#who').click();
		$('a#how div').toggleClass( 'active');

		setTimeout(function(){
			$('div.nav-drawer-container.how').slideToggle('fast');
		}, 350);

	} else if($('a#why div').hasClass('active')){
		$('a#why').click();
		$('a#how div').toggleClass( 'active');

		setTimeout(function(){
			$('div.nav-drawer-container.how').slideToggle('fast');
		}, 350);

	} else {
		$('a#how div').toggleClass( 'active');
		$('div.nav-drawer-container.how').slideToggle('fast');
	}	
});