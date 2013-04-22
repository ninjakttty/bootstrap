require.config({
	"paths": {
		"backbone": "/scripts/vendor/backbone/backbone",
		"backbone.marionette": "/scripts/vendor/backbone.marionette/lib/backbone.marionette",
		"jquery": "/scripts/vendor/jquery/jquery",
		"underscore": "/scripts/vendor/underscore/underscore",
		"require-handlebars-plugin": "/scripts/vendor/require-handlebars-plugin/require-handlebars-plugin"
	},
	"shim": {
		"backbone": {
			"deps": [
				"underscore",
				"jquery"
			],
			"exports": "Backbone"
		},
		"underscore": {
			"exports": "_"
		}
	}
});

require(['views/app'], function(AppView) {
	new AppView({
		el: $('#main')
	});
});