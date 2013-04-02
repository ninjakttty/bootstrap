require.config({
	"paths": {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
		"marionette": "vendor/marionette/lib/backbone.marionette"
	}
});

require(['views/app'], function(AppView){
	 new AppView;
	});
	