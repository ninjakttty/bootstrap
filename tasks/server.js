module.exports = function(grunt) {
  var ENV = process.env;
  var CWD = process.cwd();

  var path = require("path");
  var fs = require("fs");
  var sys = require('sys')
  var exec = require('child_process').exec;

  // External libs.
  var express = require("express");
  var livereload = require('express-livereload');

  // Shorthand Lo-Dash.
  var _ = grunt.util._;

  grunt.registerTask("server", "Run dev server", function() {

    var options = {
      // Url root paths.  These are useful to determine where application vs
      // vendor code exists in the path.
      root: "../",
      appDir: "public/",
      port: 3000,

      // Where on the filesystem files are, can be absolute or relative.
      prefix: ".",

      openBrowser: false,

      // Should this server exist forever or die immediately after all tasks
      // are done.
      forever: true,

      // Controls how the server is run.
      host: ENV.HOST || "localhost",
      port: ENV.PORT || 3000,
    };

    var configOptions = grunt.config(["server"].concat(_.toArray(arguments)));

    // Merge options from configuration.
    _.each(options, function(value, key) {

      // Only change defaults that have overrides.
      if (key in configOptions) {
        // Allow objects to be extended and overwritten.
        if (_.isObject(value)) {
          options[key] = _.extend(value, configOptions[key]);
        } else {
          options[key] = configOptions[key];
        }
      }
    });

    // console.log( options );

    // Run forever and disable crashing.
    if (options.forever === true) {
      // Put this task into async mode, and never complete it.
      this.async();

      // Setting force to true, keeps Grunt from crashing while running the
      // server.
      grunt.option("force", true);
    }

    // Run the server.
    run(options);

  });

  // Actually run the server...

  function run(options) {

    var app = express();
    livereload(app, config = {});
    app.use(express.static(__dirname + '/../public'));
    grunt.log.ok("Listening on", "http://" + options.host + ":" + options.port);
    if (options.openBrowser) {
      exec('open -a "' + options.openBrowser + '" "http://' + options.host + ':' + options.port + '"')
    }
    return app.listen(3000);
  }
};