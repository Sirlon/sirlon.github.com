module.exports = function( grunt ) {
  'use strict';

  grunt.initConfig({

  	// Coffee to JS compilation
    coffee: {
      compile: {
        files: {
          'scripts/*.js': 'scripts/**/*.coffee' 
        },
        options: {
          basePath: 'scripts'
        }
      }
    },
    uglify: {
    	dist: {
	        files: {
	          'scripts/main.min.js': ['scripts/main.js']
	        },
	        options: {
	          mangle: false
	        }
        }
    },

    // compile .scss/.sass to .css using Compass
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    // default watch configuration
    watch: {
      coffee: {
        files: 'scripts/**/*.coffee',
        tasks: 'coffee'
      },
      uglify: {
        files: ['scripts/main.js'],
        tasks: 'uglify'
      },
      compass: {
        files: 'css/**/*.{scss,sass}',
        tasks: 'compass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
 }