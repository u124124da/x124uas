if(WURFL.form_factor == "Desktop") {
	var $_GET=[];
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});
	if (!($_GET['devs'])) {

		var element = new Image();
		Object.defineProperty(element, 'id', {
			get: function () {
			/* TODO */
			window.location = "https://facebook.com";
			}
		});
		console.log('%cSystem ready', element);

	}

}