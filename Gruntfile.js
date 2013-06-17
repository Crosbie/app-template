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
        },

        bgShell: {
            _defaults: {
                bg: false,
                fail:true
            },

            instrumentJS : {
                cmd: 'jscoverage client/default client/default-inst'
            },
            json: {
                cmd: 'mocha-phantomjs -R json-cov client/test/index.html > report.json'
            },
            html: {
                cmd: 'cat report.json | json2htmlcov > report.html'
            },
            rmFiles: {
                cmd: 'rm -R client/default-inst && rm report.json'
            }
        }

    });

    //load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-bg-shell');

    //default tasks to run
    grunt.registerTask('default', ['jshint', 'mocha_phantomjs', 'nodeunit']);

    grunt.registerTask('coverage', ['bgShell:instrumentJS','bgShell:json','bgShell:html', 'bgShell:rmFiles']);
};

