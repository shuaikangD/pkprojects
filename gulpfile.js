const gulp = require("gulp");
const connect = require("gulp-connect");
// const proxy = require("http-proxy-middleware");
//压缩插件  什么时候上线什么时候压缩，比较耗费性能，最后执行一次
var uglify = require('gulp-uglify');
var pump = require('pump');

const babel = require('gulp-babel');
let cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
const imagemin = require('gulp-imagemin');
const srcList = {
    "scripts":{
        "src":"./src/javascripts/*.js",
        "dest":"./dist/scripts"
    },
    "html":{
        "src":"./src/*.html",
        "dest":"./dist"
    },
    "styles":{
        "src":"./src/styles/*.css",
        "dest":"./dist/styles"
    },
    "sass":{
        "src":"./src/sass/*.scss",
        "dest":"./dist/styles"
    },
    "php":{
        "src":"./src/php/*.php",
        "dest":"./dist/php"
    },
    "json":{
        "src":"./src/pike/*.json",
        "dest":"./dist/pike"
    }
}

// const proxyList = [
//     proxy("/douban",{
//         target:"https://api.douban.com:443",
//         changeOrigin:true,
//         pathRewrite:{
//             "/douban":""
//         }
//     })
// ]

gulp.task('compress', function (cb) {
    pump([
          gulp.src(srcList.scripts.src),
            //进行es6的编译
          babel({
            presets: ['@babel/env']
            }),
          uglify(),
          gulp.dest(srcList.scripts.dest)
      ],
      cb
    );
  });
  gulp.task('minify-css', () => {
    return gulp.src(srcList.sass.src)
        .pipe(sass().on('error', sass.logError))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(srcList.styles.dest));
  });

gulp.task("build",["compress","minify-css"]);

gulp.task("connect",()=>{
    connect.server({
        root : "./dist",
        livereload: true
        // middleware:function(connect,opt){
        //     // return proxyList;
        // }
    })
})

gulp.task('sass', function () {
    return gulp.src(srcList.sass.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(srcList.sass.dest))
      .pipe(connect.reload());
  });

gulp.task("html",()=>{
    return gulp.src(srcList.html.src)
        .pipe(gulp.dest(srcList.html.dest))
        .pipe(connect.reload());
})

gulp.task("js",()=>{
    return gulp.src(srcList.scripts.src)
        .pipe(gulp.dest(srcList.scripts.dest))
        .pipe(connect.reload());
})

gulp.task("php",()=>{
    return gulp.src(srcList.php.src)
        .pipe(gulp.dest(srcList.php.dest))
        .pipe(connect.reload());
})
gulp.task("json",()=>{
    return gulp.src(srcList.json.src)
        .pipe(gulp.dest(srcList.json.dest))
        .pipe(connect.reload());
})
gulp.task("css",()=>{
    return gulp.src(srcList.styles.src)
        .pipe(gulp.dest(srcList.styles.dest))
        .pipe(connect.reload())
})

gulp.task("watch",()=>{
    gulp.watch(srcList.html.src,["html"]);
    gulp.watch(srcList.scripts.src,["js"]);
    gulp.watch(srcList.styles.src,["css"]);
    gulp.watch(srcList.sass.src,["sass"])
})

gulp.task("default",["watch","connect"]);