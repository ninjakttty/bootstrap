define(['backbone'], function(Backbone) {
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
			var template = '<div class="row"><div class="col-span-12"><h1>'+data+'</h1></div></div>';
			this.$el.html(template);
			return this;
		}
	});

	return App;
});