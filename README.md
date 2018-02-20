# Javascript Library Boilerplate
It's a boilerplate to start to develop any kind of javascript libraries. It can build output for min.js, js, css and min.css.

## Features
- Babel compiler for ES6 features.
- Separated js and css file.
- Sass builder
- Test folder is ready for unit tests.
- Map folder for debugging.
- ENV options for prod and dev
- Uglified and minified files for production.

## Usage
First clone this repo to your local.
````
git clone https://github.com/melihkorkmaz/js-library-boilerplate.git
````

You can add your code to src folder. And you can also use test folder to create your library tests.

### Build
To build your library for development please run;
````
npm run build:dev
````

To build only production files;
````
npm run build:prod
````

To build both files;
````
npm run build
````

To run all tests;
````
npm test
````

## Options
In package.json you will see "libraryName" field. When you build your library, it generates files to dist folder. File name will be the same as your project name which is in your package file. But for library name it will use your libraryName field in your package.json. These mean users can use you your library in browser like "window.libraryName".

### Node Libraries with 'fs'
If you're developing node js library to use nodejs feature like "fs" please uncomment below line at webpack.config.js
````
 devtool: 'source-map',
    // target: 'node', //Uncomment this for nodejs libraries to use like "fs" features.
module:...
````