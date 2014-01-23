define(
  ['controllers/controllers'],
  function (controllers, locals)
  {
    'use strict';

    controllers.controller ('promotional',
      [
        '$rootScope', '$scope',
        function ($rootScope, $scope)
        {
          $scope.setChannelView = function (view)
          {
            $scope.channelView = {
              tel:    false,
              mail:   false,
              twitter:false,
              email:  false,
              gmail:  false
            };

            $scope.channelView[view] = true;
          };

          $scope.setPromiseView = function (view)
          {
            $scope.promiseView = {
              cost:         false,
              analyze:      false,
              time:         false,
              customizable: false,
              integration:  false,
              cloud:        false,
              ideas:        false,
              performance:  false,
              privacy:      false
            };

            $scope.promiseView[view] = true;
          };

          $scope.setChannelView('tel');
          $scope.setPromiseView('cost');
        }
      ]
    );
  }
);