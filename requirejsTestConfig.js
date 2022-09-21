const requirejs = require('requirejs');

requirejs.config({
  baseUrl : 'src/resources/js/application',
  paths: {
    'jquery' : 'jquery/jquery-3.6.0.min',
    //'underscore' : 'underscore/underscore-1.8.3',
    //'backbone' : 'backbone/backbone'
  }
});

const {JSDOM} = require("jsdom");

// Create a virtual dom so the Mocha test can access the requirejs files
const { window } = new JSDOM("<html></html>");
global.window = window;
global.document = window.document;

module.exports = requirejs;