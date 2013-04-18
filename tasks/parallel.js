module.exports = function(grunt) {
  var _ = require('underscore');
  grunt.registerTask('parallel', 'Run async tasks in parallel and output', function() {
    var done = this.async();

    var data = grunt.config.get('parallel');
    _.each(data.tasks, function(task) {
      var options = {
        grunt: true,
        flush: true,
        args: task
      };
      var child = grunt.util.spawn(options);
      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);
    });

  });
};