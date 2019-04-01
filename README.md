# phusion-react-skeleton

This repository is a skeleton project for building SPAs using React and [`phusion`](https://github.com/ieatstickers/phusion). It provides a gulpfile (Gulp 4) with tasks for scss compilation, concatenating and uglifying JavaScript, compressing images, and running webpack builds (Webpack 4).

### Getting Started

First, install npm dependencies.

```bash
npm install
```

Then just run gulp.

```bash
gulp
```

### Gulp

When running gulp, there is an optional environment variable we can pass (`ENV`). Available options are `dev` and `prod`. When running for `dev`, sourcemaps will be included for scss, JavaScript and TypeScript files. If `ENV` is not set, it will default to `dev`.

The default gulp task runs all build tasks, followed by all watch tasks, then spins up a development server and opens the page in the browser.

```bash
gulp
```

Running `gulp build` will run all build tasks once and then exit. Watch tasks and dev server are **not** run.

```bash
gulp build
```

##### Available Tasks:

###### Build tasks:
- ***scss:*** Processes `.scss` files and outputs css. When building for `prod`, these files also get run through an auto-prefixer and then minified. Source maps are included when building for `dev`.
- ***copy:*** Copies font files into public directory.
- ***imgMin:*** Compresses all images and adds them to the public directory.
- ***jsConcat:*** Concatenates an array of JavaScript files (used for building a bundle of app dependencies e.g. Vue)
- ***jsUglify:*** Uglifies all JavaScript files in the js directory.
- ***webpack:*** Runs webpack using `webpack.config.js`

###### Watch tasks:
- ***scssWatch:*** Runs the scss task when `.scss` files change.
- ***copyWatch:*** Runs the copy task src files are added to, removed or changed.
- ***imgMinWatch:*** Runs the imgMin task when images are added/removed/changed.
- ***jsUglifyWatch:*** Runs the jsUglify task when JavaScript src files are changed.

###### Phusion build tasks:
- ***config:*** Merges all config files and caches out the merged config object as JSON.
- ***serve:*** Spins up a development server with live reloading.

###### Phusion watch tasks:
- ***configWatch:*** Runs the config task when `.yaml` files in the config directory are added/removed/changed. 
