define(
  ['app', 'localization', 'config'],
  function (app, locals, config)
  {
    'use strict';

    app.run(
      [
        '$rootScope',
        function($rootScope)
        {
          console.log('localization =>', locals);
          console.log('config =>', config);

          /**
           * TODO: Add this event listeners to a directive
           */
          $rootScope.$on('$routeChangeStart', function (event, next, current)
          {
            // Remove this lines on production, eye-candy purple background for the home/splash page
            // ($location.path() == '/home') ? $('body').addClass('bs-docs-home') : $('body').removeClass('bs-docs-home');
          });

          $rootScope.$on('$routeChangeSuccess', function (event, current, previous)
          {
          });

          $rootScope.$on('$routeChangeError', function (event, current, previous, rejection)
          {
            console.error('Error: changing routes!');
          });
        }
      ]
    );
  }
);