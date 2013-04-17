define(['backbone'], function(Backbone) {
	var App = Backbone.View.extend({
		initialize: function(){
			console.log( 'initialize' );
			$.get('http://localhost:8080/hello', function(data, textStatus, xhr) {
				 console.log( data );
			});

			this.render();
		},
		render: function(){
			console.log( 'render' );
			var template = '<div class="row"><div class="col-span-12"><h1>Hello World</h1></div></div>';
			this.$el.html(template);
			return this;
		}
	});

	return App;
});