define(
  ['controllers/controllers', 'modals/askfast'],
  function (controllers, AskFast)
  {
    'use strict';

    controllers.controller ('login',
      [
        '$scope', '$rootScope', 'AskFast',
        function ($scope, $rootScope, AskFast)
        {
          $scope.data = {
            email: '',
            password: '',
            validation: {
              email: false,
              password: false
            }
          };

          $scope.login = function ()
          {
            AskFast.login('sven', '098f6bcd4621d373cade4e832627b4f6')
          }
        }
      ]
    );
  }
);