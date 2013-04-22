define(['backbone', 'templates'], function(Backbone, Handlebars) {
	var App = Backbone.View.extend({
		initialize: function(){
			var self = this;
			console.log( 'initialize' );
			$.get('http://localhost:8080/hello', function(data){
				self.render(data);
			});

		},
		render: function(data){
			console.log( 'render' );
			var template = Handlebars['main.hbs']({data: data});
			this.$el.html(template);
			return this;
		}
	});

	return App;
});