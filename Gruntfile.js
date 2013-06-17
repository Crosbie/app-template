module.exports = function(grunt) {

    grunt.initConfig({

        //our JSHint options
        jshint: {
            all: [  'client/default/*.js',
                    'client/default/app/**/*.js',
                    'client/default/js/*.js',
                    'client/test/tests/*.js'
                ] //files to lint
        },

        mocha_phantomjs: {
            options: {
                'reporter': 'spec',
                'output': 'client/test/result.xml'
            },
            all: ['client/test/index.html']
        },

        nodeunit: {
            files: ['cloud/tests/*.js']
        }

    });

    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    //default tasks to run
    grunt.registerTask('default', ['jshint', 'mocha_phantomjs', 'nodeunit']);

    grunt.registerTask('coverage', 'Generate code coverage report', function() {

    });
};

