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

            instrumentJS: {    // remove old inst folder, and create new one
                cmd: 'rm -R client/default-inst && jscoverage client/default client/default-inst'
            },
            inst: {       // create inst folder
                cmd: 'jscoverage client/default client/default-inst'
            },
            noInst: {     // delete inst folder only
                cmd: 'rm -R client/default-inst'
            },
            json: {     // generate json report, and output to file
                cmd: 'mocha-phantomjs -R json-cov client/test/index.html > report.json'
            },
            html: {     // convert json report to html report
                cmd: 'cat report.json | json2htmlcov > report.html'
            },
            rmFiles: {  // remove json file
                cmd: 'rm report.json'
            },
            less: {     // compile less files into css
                cmd: 'lessc client/default/less/styles.less > client/default/css/styles.css'
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
    grunt.registerTask('coverage', ['bgShell:instrumentJS','bgShell:json','bgShell:html', 'bgShell:rmFiles']);
    grunt.registerTask('less', ['bgShell:less']);
    grunt.registerTask('inst', ['bgShell:inst']);
    grunt.registerTask('noInst', ['bgShell:noInst']);
};

