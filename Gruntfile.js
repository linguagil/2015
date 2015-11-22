/* globals require, module */
// Generated on 2014-07-18 using generator-angular 0.7.1

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      // jsTest: {
      //   files: [
      //     'test/spec/{,*/}*.js',
      //     '<%= yeoman.app %>/scripts/{,*/}*.js'
      //   ],
      //   tasks: [
      //     'newer:jshint:test',
      //     'karma'
      //   ]
      // },
      //compass: {
      //  files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
      //  tasks: ['compass:server', 'autoprefixer']
      //},
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      ignores: [
        'Gruntfile.js'
      ],
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
      //,
      //
      // test: {
      //   options: {
      //     jshintrc: 'test/.jshintrc'
      //   },
      //   src: ['test/spec/{,*/}*.js']
      // }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },




    // Compiles Sass to CSS and generates necessary files if requested
    /*
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    */

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    htmllint: {
      app: ['<%= yeoman.app %>/*.html'],
      dist: ['<%= yeoman.dist %>/*.html']
    },

    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*','*.scss','node_modules'],
        recursive: true
      },
      prod: {
        options: {
          src: '<%= yeoman.dist %>/',
          dest: '/home/linguagil/staging.2015.linguagil.com.br/',
          host: 'linguagil@linguagil.com.br',
          syncDestIgnoreExcl: true
        }
      }
    },


    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        //'compass:server'
      ],
      test: [
        //'compass'
      ],
      dist: [
        //'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    // karma: {
    //   unit: {
    //     configFile: 'karma.conf.js',
    //     singleRun: true
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('modifyImageLinkInScript', 'Task for replace image link in script file.', function(filename, imageTarget, folder) {
    folder = (typeof folder !== 'undefined') ? '/' + folder : '';
    var fs = require('fs'),
        SCRIPTS_DIST_DIR = 'dist/scripts',
        IMAGE_DIST_DIR = 'dist/images' + folder,
        oldestImage = imageTarget
    ;

    fs.readdirSync(SCRIPTS_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(filename) !== (-1) ) {
        filename = SCRIPTS_DIST_DIR+'/'+file;
      }
    });

    fs.readdirSync(IMAGE_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(oldestImage) !== (-1) ) {
        imageTarget = file;
      }
    });

    var data = fs.readFileSync(filename, 'utf8');
    data = data.replace(new RegExp(oldestImage, 'g'), imageTarget);

    fs.writeFileSync(filename, data, 'utf8');

  });

  grunt.registerTask('modifyImageLinkInStyles', 'Task for replace image link in stylesheet file.', function(filename, imageTarget) {
    var fs = require('fs'),
        STYLES_DIST_DIR = 'dist/styles',
        IMAGE_DIST_DIR = 'dist/images',
        oldestImage = imageTarget
    ;

    fs.readdirSync(STYLES_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(filename) !== (-1) ) {
        filename = STYLES_DIST_DIR+'/'+file;
      }
    });

    fs.readdirSync(IMAGE_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(oldestImage) !== (-1) ) {
        imageTarget = file;
      }
    });

    var data = fs.readFileSync(filename, 'utf8');
    data = data.replace(new RegExp(oldestImage, 'g'), imageTarget);

    fs.writeFileSync(filename, data, 'utf8');

  });

  grunt.registerTask('modifyImageLinkInHtml', 'Task for replace image link in html files.', function(filename, folder, imageTarget) {
    folder = (typeof folder !== 'undefined') ? '/' + folder : '';
    var fs = require('fs'),
        HTML_DIST_DIR = 'dist/',
        IMAGE_DIST_DIR = 'dist/images' + folder,
        oldestImage = imageTarget
    ;

    fs.readdirSync(HTML_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(filename) !== (-1) ) {
        filename = HTML_DIST_DIR+'/'+file;
      }
    });

    fs.readdirSync(IMAGE_DIST_DIR).forEach(function(file) {
      if ( file.indexOf(oldestImage) !== (-1) ) {
        imageTarget = file;
      }
    });

    var data = fs.readFileSync(filename, 'utf8');
    data = data.replace(new RegExp(oldestImage, 'g'), imageTarget);

    fs.writeFileSync(filename, data, 'utf8');

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    //'clean:server',
    //'concurrent:test',
    //'autoprefixer:dist',
    //'connect:test'
  ]);

  // var pages = [
  //   'index.html',
  //   'programacao.html',
  //   'videos.html',
  //   'codigo-de-conduta.html',
  //   'eventos-anteriores.html'
  // ];

  // var pagesLength = pages.length;

  var gruntBuildTasks = [
    'jshint:all',
    //'htmllint:app',
    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer:dist',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin',
    'modifyImageLinkInScript:scripts.js:pin.png',
    'modifyImageLinkInScript:scripts.js:wilson-mendes.jpeg:talks',
    'modifyImageLinkInScript:scripts.js:marlon-carvalho.jpeg:talks',
    'modifyImageLinkInScript:scripts.js:luciano-borges.jpg:talks',
    'modifyImageLinkInScript:scripts.js:a-confirmar.jpg:talks',
    'modifyImageLinkInScript:scripts.js:paulo-ortins.jpg:talks',
    'modifyImageLinkInScript:scripts.js:otavio-santana.jpg:talks',
    'modifyImageLinkInScript:scripts.js:fernando-masanori.jpg:talks',
    'modifyImageLinkInScript:scripts.js:osni-oliveira.jpg:talks',
    'modifyImageLinkInScript:scripts.js:isabela-goncalves.jpg:talks',
    'modifyImageLinkInScript:scripts.js:robson-peixoto.png:talks',
    'modifyImageLinkInScript:scripts.js:rodrigo-ribeiro.png:talks',
    'modifyImageLinkInScript:scripts.js:rafael-gomes.jpg:talks',
    'modifyImageLinkInScript:scripts.js:leandro-coelho.jpg:talks',
    'modifyImageLinkInScript:scripts.js:leonardo-soares.jpg:talks',
    'modifyImageLinkInScript:scripts.js:nelson-glauber.jpg:talks',
    'modifyImageLinkInScript:scripts.js:henrique-bastos.png:talks',
    'modifyImageLinkInScript:scripts.js:angelo-orrico.jpg:talks',
    'modifyImageLinkInScript:scripts.js:alexandre-costa.jpg:talks',
    'modifyImageLinkInScript:scripts.js:achilles-froes.jpeg:talks',
    'modifyImageLinkInScript:scripts.js:juliano-ribeiro.jpg:talks',
    'modifyImageLinkInScript:scripts.js:rafael-miranda.png:talks',
    'modifyImageLinkInScript:scripts.js:vladson-freire.jpg:talks',
    'modifyImageLinkInScript:scripts.js:victor-germano.jpg:talks',

    'modifyImageLinkInStyles:main.css:home-background.jpg'
  ];

  // for(var i = 0; pagesLength > i; i++) {

  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:background.gif');

  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:be-a-sponsor.png');
  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:novatec.png');
  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:he-mobile.png');
  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:oncedev.png');
  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:senai-ads.png');
  //   gruntBuildTasks.push('modifyImageLinkInHtml:'+pages[i]+':sponsors:senai.png');
  // }

  grunt.registerTask('build', gruntBuildTasks);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('travis', [
    'bower-install',
    'jshint',
    'build',
    'htmllint:dist'
  ]);

  grunt.registerTask('deploy', [
    'travis',
    'rsync:prod'
  ]);

};
