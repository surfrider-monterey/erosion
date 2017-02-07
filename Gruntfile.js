
module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
         targetDir : 'bower_components/'
        }
      }
    },

    bowercopy: {
      buildjs: {
        options: {
          destPrefix: '_build/js/lib'
        },
        files: {
          'bootstrap.js' : 'bootstrap/dist/js/bootstrap.js',
          'jquery.js' : 'jquery/dist/jquery.js',
          'moment.js' : 'moment/moment.js',
          'handlebars.runtime.js' : 'handlebars/handlebars.runtime.js',
          'hammer.js' : 'hammerjs/hammer.js',
          'jquery.twentytwenty.js' : 'twentytwenty/js/jquery.twentytwenty.js',
          'jquery.event.move.js' : 'twentytwenty/js/jquery.event.move.js'
        },
      },
      buildcss: {
        options: {
          destPrefix: '_build/css/lib'
        },
        files: {
          'bootstrap.css' : 'bootstrap/dist/css/bootstrap.min.css',
          'twentytwenty.css' : 'twentytwenty/css/twentytwenty.css'
        },
      }
    },

    handlebars: {
      dist: {
        options: {
          namespace: function(filename) {
            var names = filename.replace('src/handlebars/', '');
            names = names.split('/');
            names.pop();
            return 'templates.' + names.join('.');
          },
          processName: function(filename) {
            return filename.split('/').pop().replace('.hbs', '');
          }
        },
        files: {
          '_build/js/templates.js': ['src/handlebars/**/*.hbs']
        }
      }
    },

    watch: {
      all: {
        files: ['src/**', '!src/data/images/**'],
        tasks: ['default']
      },
      js: {
        files: ['src/**', '!src/data/images/**'],
        tasks: ['coffee', 'handlebars', 'copy']
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true
      },
      dist: {
        options: {
          environment: 'production',
          imagesDir: 'img',
          force: true,
          outputStyle: 'compressed',
        }
      }
    },

    coffee: {
      compile: {
        expand: true,
        flatten: false,
        cwd: 'src/coffee',
        src: ['**/*.coffee'],
        dest: '_build/js/',
        ext: '.js'
      },
    },

    'gh-pages': {
      options: {
        base: '_build'
      },
      src: ['**']
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 4000,
          base: '_build'
        }
      }
    },

    copy: {
      all: {
        files: [
          {
            expand: true,
            src: '**',
            dest: '_build/',
            cwd: 'src/html/'
          },
          {
            expand: true,
            src: '**.json',
            dest: '_build/data/',
            cwd: 'src/data/'
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            src: '**',
            dest: '_build/data/',
            cwd: 'src/data/'
          }
        ]
      }
    }

  });

  grunt.registerTask('default', ['coffee', 'compass', 'handlebars', 'copy:all']);
  grunt.registerTask('setup', ['bower', 'bowercopy']);
};
