/* eslint-disable */

const gulp = require('gulp');
const path = require('path');

const closureCompiler = require('google-closure-compiler').gulp();

const defaultSettings = {
	js: path.join(__dirname, './src/**.js'),
	compilation_level: 'ADVANCED',
	warning_level: 'VERBOSE',
	language_in: 'ECMASCRIPT_NEXT',
	language_out: 'ECMASCRIPT5_STRICT',
	dependency_mode: 'STRICT',
	output_wrapper: '(function(){\n%output%\n}).call(this)',
	conformance_configs: [path.join(__dirname, './conformance/strict.textproto')],
};

gulp.task('default', () => {
	return closureCompiler(Object.assign({}, defaultSettings, {
		entry_point: path.join(__dirname, './src/index.js'),
		js_output_file: 'output.min.js'
	}))
	.src() // needed to force the plugin to run without gulp.src
	.pipe(gulp.dest('./dist/js'));
});

gulp.task('check', () => {
	return closureCompiler(Object.assign({}, defaultSettings, {
		entry_point: path.join(__dirname, './src/index.js'),
		checks_only: true,
	}))
	.src() // needed to force the plugin to run without gulp.src
	.pipe(gulp.dest('./dist/js'));
});
