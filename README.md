# mocha-requirejs 

Basic setup so mocha unit testing can work with requirejs when having to access utilities/componoents within other views such as backbone.

# package.json dependencies

`npm install --save-dev assert jsdom mocha requirejs` 

Files go inside `test` folder in the root.  Add the following to your `scripts` object in the package.json 

`"test": "mocha test/**/*.js"
