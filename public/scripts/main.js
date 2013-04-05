require.config({
	"paths": {},
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
	new AppView;
});