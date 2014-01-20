module.exports = function(grunt) {

    grunt.initConfig({

        //our JSHint options
        jshint: {
            all: ['client/dev/**/*.js',
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
        },

        bgShell: {
            _defaults: {
                bg: false,
                fail:true
            },

            less: {     // compile less files into css
                cmd: 'lessc client/default/less/styles.less > client/default/css/styles.css'
            },
            build: {
                cmd :'. build.sh'
            }
        }

    });

    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-bg-shell');


    // --------- TASKS AVAILABLE FROM TERMINAL ------------
    grunt.registerTask('test', ['jshint', 'mocha_phantomjs', 'nodeunit']);
    grunt.registerTask('less', ['bgShell:less']);
    grunt.registerTask('build', ['bgShell:build']);
    grunt.registerTask('default', ['bgShell:build']);
};

