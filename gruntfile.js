module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress:true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify:{
            targe:{
                files:{
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['less:development']);
    grunt.registerTask('build', ['less:production', 'uglify'])
}