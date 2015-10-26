requirejs.config({
    basePath: './',
   
    paths: {
      'jquery': '../bower_components/jquery/dist/jquery.min',
      'socketio': '/socket.io/index',
      'mustache': '../bower_components/mustache.js/mustache.min'
    },
   
    shim: {
      mustache: {
        exports: 'Mustache'
      }
    }
  });
   
  require(['view'], function(view) {});
