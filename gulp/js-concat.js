
/*--------------------
  Dependencies
--------------------*/

const { dest, src } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


/*--------------------
  Variables
--------------------*/

const env = process.env['ENV'];
const outputBuildDir = process.env['OUTPUT_BUILD_DIR'];
const projectRoot = process.env['PROJECT_ROOT_DIR'];
let reactPath = env === 'dev' ? './node_modules/react/umd/react.development.js' : './node_modules/react/umd/react.production.js';
let reactDomPath = env === 'dev' ? './node_modules/react-dom/umd/react-dom.development.js' : './node_modules/react-dom/umd/react-dom.production.js';

var jsFilesToConcat = [
  // './node_modules/jquery/dist/jquery.min.js',
  './node_modules/phusion/dist/core/Phusion.js',
  reactPath,
  reactDomPath
];

var jsConcatOutputFileName = 'external.min.js';
var jsConcatOutputDirectory = outputBuildDir + '/assets/js/';


/*--------------------
  Task: jsUglify
--------------------*/

function jsConcat()
{
  return src(jsFilesToConcat)
    .pipe(concat(jsConcatOutputFileName))
    .pipe(uglify())
    .pipe(dest(jsConcatOutputDirectory));
}

exports.jsConcatTask = jsConcat;
