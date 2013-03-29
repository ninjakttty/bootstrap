require.config({
	"paths": {
		"jquery": "vendor/jquery/jquery",
		"backbone": "vendor/backbone",
		"underscore": "underscore-amd/underscore",
		"backbone-amd": "vendor/backbone-amd",
		"underscore-amd": "vendor/underscore-amd",
		"marionette": "vendor/marionette/lib/backbone.marionette"
	}
});

require(['views/app'], function(AppView){
	 new AppView;
	});
	