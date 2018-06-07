/* eslint-disable */

const gulp = require('gulp');
const path = require('path');

const closureCompiler = require('google-closure-compiler').gulp();

gulp.task('default', () => {
	return closureCompiler({
		js: path.join(__dirname, './src/**.js'),
		entry_point: path.join(__dirname, './src/index.js'),
		compilation_level: 'ADVANCED',
		warning_level: 'VERBOSE',
		language_in: 'ECMASCRIPT_NEXT',
		language_out: 'ECMASCRIPT5_STRICT',
		dependency_mode: 'STRICT',
		output_wrapper: '(function(){\n%output%\n}).call(this)',
		js_output_file: 'output.min.js'
	})
	.src() // needed to force the plugin to run without gulp.src
	.pipe(gulp.dest('./dist/js'));
});

gulp.task('check', () => {
	return closureCompiler({
		js: path.join(__dirname, './src/**.js'),
		entry_point: path.join(__dirname, './src/index.js'),
		compilation_level: 'ADVANCED',
		warning_level: 'VERBOSE',
		checks_only: 1,
		language_in: 'ECMASCRIPT_NEXT',
		language_out: 'ECMASCRIPT5_STRICT',
		dependency_mode: 'STRICT',
		output_wrapper: '(function(){\n%output%\n}).call(this)',
		js_output_file: 'output.min.js'
	})
		.src() // needed to force the plugin to run without gulp.src
		.pipe(gulp.dest('./dist/js'));
});
