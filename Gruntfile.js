/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    less: {
      development: {
        options: {
          dumpLineNumbers: "all"
        },
        files: {
          "public/stylesheets/less.css": "assets/less/main.less"
        }
      }
    },
    server: {
      port: 3000,
      app: "public",
      livereload: true,
      openBrowser: "Google Chrome Canary" // Google Chrome Canary, Google Chrome, Safari, Firefox , or false
    },
    watch: {
      less: {
        files: 'assets/less/**/*less',
        tasks: ['less']
      }
    },
    parallel: {
      assets: {
        grunt: true,
        tasks: ['server', 'watch']
      }
    },
    bower: {
      target: {
        rjsConfig: 'public/scripts/main.js',
        baseUrl: '/scripts/vendor'
      }
    }
  });

  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadTasks('tasks');

  grunt.registerTask('startDev', ['bower', 'less', 'parallel']);

  // Default task.
  grunt.registerTask('default', ['startDev']);

};