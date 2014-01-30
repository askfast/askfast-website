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

          var parts = [];

          angular.forEach($rootScope.config.app.nav.subs, function (sub)
          {
            angular.forEach(sub, function (part)
            {
              parts.push(part);
            });
          });

          $rootScope.subView = {};

          function resetSubViews ()
          {
            angular.forEach(parts, function (part)
            {
              $rootScope.subView[part] = false;
            });
          }

          $rootScope.setSubView = function (view)
          {
            resetSubViews();

            $rootScope.subView[view] = true;
          };

          $rootScope.location = {};

          $rootScope.$on('$routeChangeStart', function ()
          {
            $rootScope.location.path = $location.path().substring(1);

            if ($rootScope.config.app.nav.subs[$rootScope.location.path])
            {
              $rootScope.subView[$rootScope.config.app.nav.subs[$rootScope.location.path][0]] = true;
            }
            else
            {
              resetSubViews();
            }
          });

          $rootScope.$on('$routeChangeSuccess', function ()
          {
          });

          $rootScope.$on('$routeChangeError', function ()
          {
            console.error('Error: changing routes!');
          });
        }
      ]
    );
  }
);