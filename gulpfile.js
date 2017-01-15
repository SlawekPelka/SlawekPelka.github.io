var gulp 	= require('gulp'),
	pipe    = require('gulp-pipe'),
	sass 	= require('gulp-sass'),
	uglify  = require('gulp-uglify'),
	concat  = require('gulp-concat'),
	image 	= require('gulp-imagemin');

gulp.task('default', function() {
	console.log('Watching for new images...');
	gulp.watch( 'assets/img/**/*', ['imagemin'] );

	console.log('Watching for changes in sass...');
	gulp.watch( 'assets/scss/**/*.scss', ['compilescss'] );

	console.log('Watching for changes in js...');
	gulp.watch( 'assets/js/**/*.js', ['compilejs'] );
});

gulp.task('imagemin', function() {
	console.log('Compressing your images');
	return pipe([
		gulp.src('assets/img/**/*.*')
		,image()
		,gulp.dest('dist/images')
	]).on('error', function(e){ console.log(e) });
});

gulp.task('compilescss', function() {
	console.log('Compiling SCSS');
	return pipe([
		gulp.src('assets/scss/styles.scss')
		,sass({outputStyle: 'compressed'}).on('error', sass.logError)
		,gulp.dest('dist/css')
	]).on('error', function(e){ console.log(e) });
});

gulp.task('compilejs', function() {
	console.log('Uglifying your js');
	return pipe([
		gulp.src('assets/js/**/*.js')
		,uglify()
		,concat('script.js')
		,gulp.dest('dist/js')
	]).on('error', function(e){ console.log(e) });
});