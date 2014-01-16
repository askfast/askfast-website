define(
  ['app'],
  function (app)
  {
    'use strict';

    app.config(
      [
        '$routeProvider',
        function ($routeProvider)
        {
          $routeProvider
            .when('/home',
            {
              templateUrl:    'views/home.html',
              controller:     'promotional'
            })
            .when('/developers',
            {
              templateUrl:    'views/developers.html',
              controller:     'promotional'
            })
            .when('/business',
            {
              templateUrl:    'views/business.html',
              controller:     'promotional'
            })
            .when('/dialogs',
            {
              templateUrl:    'views/dialogs.html',
              controller:     'promotional'
            })
            .when('/prices',
            {
              templateUrl:    'views/prices.html',
              controller:     'promotional'
            })
            .when('/about',
            {
              templateUrl:    'views/about.html',
              controller:     'promotional'
            })
            .when('/jobs',
            {
              templateUrl:    'views/jobs.html',
              controller:     'promotional'
            })
            .when('/legal',
            {
              templateUrl:    'views/legal.html',
              controller:     'promotional'
            })
            .when('/contact',
            {
              templateUrl:    'views/contact.html',
              controller:     'promotional'
            })
            .when('/register',
            {
              templateUrl:    'views/register.html',
              controller:     'register'
            })
            .when('/login',
            {
              templateUrl:    'views/login.html',
              controller:     'login'
            })
            .when('/logout',
            {
              templateUrl:    'views/logout.html',
              controller:     'logout'
            })
            .otherwise({
              redirectTo: '/home'
            });











            /*
            .when('/login',
            {
              templateUrl:    'views/login.html',
              controller:     'login'
            })
            .when('/forgotpass',
            {
              templateUrl:    'views/forgotpass.html',
              controller:     'forgotpass'
            })
            .when('/register',
            {
              templateUrl:    'views/register.html',
              controller:     'register'
            })
            .when('/logout',
            {
              templateUrl:    'views/logout.html',
              controller:     'logout'
            })
            .when('/core',
            {
              templateUrl:    'views/core.html',
              controller:     'core',
              reloadOnSearch: false
            })
            .when('/overview',
            {
              templateUrl:    'views/overview.html',
              controller:     'overview',
              reloadOnSearch: false,
              resolve: {
                data:
                  [
                    '$rootScope', '$http', 'User', 'MD5', 'Core',
                    function ($rootScope, $http, User, MD5, Core)
                    {
                      return User.login('root'.toLowerCase(), MD5('askaskask'))
                        .then(function (session)
                        {
                          var tmpSessionID = session['X-SESSION_ID'];

                          $http.defaults.headers.common['X-SESSION_ID'] = tmpSessionID;

                          return Core.groups.detailed()
                            .then(function (results)
                            {
                              $rootScope.rootNodes = results;

                              $http.defaults.headers.common['X-SESSION_ID'] = $rootScope.session.id;
                            });
                        });
                    }
                  ]
              }
            })
            .otherwise({
              redirectTo: '/login'
            });
            */

        }
      ]
    );
  }
);