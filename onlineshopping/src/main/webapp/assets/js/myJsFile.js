(function(){
	switch(menu){
		case "HOME":
			$('#home').addClass('active');
			break;
		case "About Us":
			$('#about').addClass('active');
			break;
		case "Contact Us":
			$('#contact').addClass('active');
			break;
		default:
			$('#home').addClass('active');
			break;
			
	}
})();
