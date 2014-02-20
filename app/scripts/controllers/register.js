define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller ('register',
      [
        '$scope', '$location',
        function ($scope, $location)
        {
          $scope.user = {
            first: 'Cengiz',
            last: 'Ulusoy',
            full: function ()
            {
              return this.first + ' ' + this.last;
            },
            email: '',
            password: '',
            phone: '',
            verification: ''
          };

          if (!$location.hash())
          {
            $location.hash('step-1');
          }

          $scope.step = resolveHash();

          function resolveHash ()
          {
            return Number($location.hash().split('-')[1]);
          }

          $scope.stepForward = function ()
          {
            $scope.step = Number(resolveHash() + 1);

            console.log('-->', $scope.step);

            $location.hash('step-' + $scope.step);
          };

          $scope.stepBack = function ()
          {
            $scope.step = resolveHash() - 1;
          };

          $scope.isStep = function (step)
          {
            return (($scope.step === step));
          };
        }
      ]
    );
  }
);