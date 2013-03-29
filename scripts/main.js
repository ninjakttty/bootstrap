require.config({
	"paths": {
		"jquery": "scripts/vendor/jquery/jquery",
		"backbone": "scripts/vendor/backbone",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone-amd": "scripts/vendor/backbone-amd",
		"underscore-amd": "scripts/vendor/underscore-amd",
		"marionette": "scripts/vendor/marionette/lib/backbone.marionette"
	}
});

require(['views/app'], function(AppView){
	 new AppView;
	});
	