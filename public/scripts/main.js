require.config({
	"paths": {
		"jquery": "public/scripts/vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "public/scripts/vendor/backbone",
		"marionette": "public/scripts/vendor/marionette/lib/backbone.marionette",
		"backbone-amd": "public/scripts/vendor/backbone-amd",
		"underscore-amd": "public/scripts/vendor/underscore-amd"
	}
});

require(['views/app'], function(AppView){
	 new AppView;
	});
	