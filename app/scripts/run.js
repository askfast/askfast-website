define(
  ['app', 'localization', 'config'],
  function (app, locals, config)
  {
    'use strict';

    app.run(
      [
        '$rootScope', '$location',
        function($rootScope, $location)
        {
          $rootScope.app = $rootScope.app || {};

          $rootScope.setLanguage = function (language)
          {
            $rootScope.app.language = language;
            $rootScope.ui = locals.ui[language];
          };

          $rootScope.setLanguage(config.app.defaults.language);

          $rootScope.config = config.app;

          $rootScope.location = {};

          /**
           * TODO: Add this event listeners to a directive
           */
          $rootScope.$on('$routeChangeStart', function (event, next, current)
          {
            $rootScope.location.path = $location.path();

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