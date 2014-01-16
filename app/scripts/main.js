if (window.location.port == '8080')
{
  document.getElementsByTagName('html')[0].setAttribute('ng-app');
}

require.config (
  {
    paths: {
      angular:  '../vendors/angular/angular',
      jquery:   '../vendors/jquery/jquery.min',
      domReady: '../vendors/requirejs-domready/domReady',
      bootstrap:          '../vendors/bootstrap-sass/dist/js/bootstrap.min',
      'angular-resource': '../vendors/angular-resource/angular-resource.min',
      'angular-route':    '../vendors/angular-route/angular-route.min'
    },
    shim: {
      angular:            { deps: ['jquery'], exports:  'angular' },
      'angular-resource': { deps: ['angular'] },
      'angular-route':    { deps: ['angular'] },
      bootstrap:          { deps: ['jquery'], exports:  'bootstrap' }
    }
  }
);

require (
  [
    'angular',
    'domReady',

    'angular-resource',
    'angular-route',

    'config',
    'app',
    'routes',
    'run',

    //'modals/user',
    //'modals/core',

    'controllers/home',
    'controllers/promotional',
    'controllers/partial2',

    'directives/appVersion',

    'filters/interpolate',
    // 'filters/all',

    'services/version',
    'services/user',

    //'services/session',
    //'services/md5',
    //'services/storage',
    //'services/strings',
    //'services/generators'

    'bootstrap'
  ],
  function (angular, domReady)
  {
    'use strict';

    domReady(function ()
      {
        angular.bootstrap(document, ['DevCen']);
      }
    );

  }
);