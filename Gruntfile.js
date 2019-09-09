
module.exports = function (grunt) {

    grunt.initConfig({
      browserify: {
        build: {
          src: [ 'script/lib/*.js' ],
          dest: 'dist/bundle.js'
        }
      },
      watch: {
        scripts: {
          files: ['script/lib/*.js', './*.html', './*.css', 'Gruntfile.js'],
          tasks: ['default'],
          options: {
            spawn: false,
          }
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', [ 'browserify' ]);
};
