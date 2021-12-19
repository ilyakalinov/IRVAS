
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

let cssFiles = [
		'./node_modules/normalize.css/normalize.css',
		'./src/css/style.css',
		'./src/css/animate.min.css',
		'./src/css/bootstrap.css',
		'./src/css/style.me.css'
];
function clear(){
	return del('./build/*');
}
function clearProd(){
	return del('./prodaction/*');
}

function styles() {
	return gulp.src(cssFiles)
				.pipe(sourcemaps.init())
				.pipe(concat('style.css'))
		        .pipe(autoprefixer({
		        	browsers: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
		        }))
		        .pipe(sourcemaps.write())
				.pipe(gulp.dest('./build/css'))
				.pipe(gulp.dest('../OpenServer/JS/css' ))
				.pipe(browserSync.stream());
};
function stylesProd() {
	return gulp.src(cssFiles)
				.pipe(concat('style.css'))
		        .pipe(autoprefixer({
		        	browsers: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
		        }))
		        .pipe(sourcemaps.write())
				.pipe(gulp.dest('./prodaction/css'))
				.pipe(browserSync.stream());
};
function img() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./build/img'))
				.pipe(browserSync.stream());
};
function imgProd() {
	return gulp.src('./src/img/**/*')
				.pipe(gulp.dest('./prodaction/img'))
				.pipe(browserSync.stream());
};
function html() {
	return gulp.src('src/index.html')
				.pipe(gulp.dest('./build'))
				.pipe(browserSync.stream());
};
function htmlProd() {
	return gulp.src('src/index.html')
				.pipe(gulp.dest('./prodaction'))
				.pipe(browserSync.stream());
};
function js(){
	return gulp.src('./src/js/script.js')
			.pipe(browserSync.stream());
};
function jsAll(){
	return gulp.src('./src/js/*')
			.pipe(browserSync.stream());
};
function json(){
	return gulp.src('./src/js/*.json')
			.pipe(gulp.dest('./build/js'))
			.pipe(browserSync.stream());
}
function jsonProd(){
	return gulp.src('./src/js/*.json')
			.pipe(gulp.dest('./prodaction/js'))
			.pipe(browserSync.stream());
}
function script() {
	return gulp.src('./src/js/script.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
}
function scriptProd() {
	return gulp.src('./src/js/script.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./prodaction/js'))
		.pipe(browserSync.stream());
}
function server(){
	return gulp.src('./src/server.php')
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
}
function serverProd(){
	return gulp.src('./src/server.php')
		.pipe(gulp.dest('./prodaction'))
		.pipe(browserSync.stream());
}
function serverJson(){
	return gulp.src('./db.json')
		.pipe(gulp.dest('./prodaction'))
		.pipe(browserSync.stream());
}
function watch(){
	gulp.watch('./src/css/**/*.css', styles),
	gulp.watch('./src/index.html', html),
	gulp.watch('./src/js/script.js', js),
	gulp.watch('./src/js/*.js', jsAll),
	gulp.watch('src/img/**/*'),
	gulp.watch('./src/server.php', server),
	browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
}

let build = gulp.series(clear,
	gulp.parallel(styles, img, html, js, jsAll, json, server));

gulp.task('build', build);
gulp.task('prod', gulp.series(clearProd,
	gulp.parallel(stylesProd, imgProd, htmlProd, jsonProd, jsonProd, serverProd, serverJson), scriptProd));
gulp.task('watch', gulp.series(build,
	gulp.parallel(script, watch)));