define(['backbone'], function(Backbone) {
	var App = Backbone.View.extend({
		initialize: function(){
			console.log( 'initialize' );
			this.render();
		},
		render: function(){
			console.log( 'render' );
			this.$el.html("<p>Hello World</p>");
			return this
		}
	});

	return App;
});