define(
  ['controllers/controllers', 'modals/askfast'],
  function (controllers, AskFast)
  {
    'use strict';

    controllers.controller ('register',
      [
        '$scope', '$location', 'AskFast',
        function ($scope, $location, AskFast)
        {
          $('body').addClass('register-0');

          $scope.data = {
            user: {
              name: {
                first: '',
                last: '',
                full: function ()
                {
                  return this.first + ' ' + this.last;
                }
              },
              email: '',
              phone: ''
            },
            passwords: {
              first: '',
              second: ''
            },
            verification: '',
            agreed: false,
            validation: {
              name: {
                first: false,
                last: false
              },
              email: false,
              passwords: false,
              phone: false
            },
            submitted: false
          };

          $scope.step = {
            value: null,

            resolve: Number($location.hash().split('-')[1]),

            check: function (step)
            {
              return ((this.value === step));
            },

            validate: function (step)
            {
              var result = true;

              switch (step)
              {
                case 1:
                  $scope.data.submitted = true;

                  $scope.data.validation.name.first = (($scope.data.user.name.first == ''));
                  $scope.data.validation.name.last = (($scope.data.user.name.last == ''));
                  $scope.data.validation.email = (($scope.data.user.email == ''));

                  $scope.data.validation.passwords = (
                    ($scope.data.passwords.first == '') || ($scope.data.passwords.second == '') ||
                    ($scope.data.passwords.first != $scope.data.passwords.second)
                  );

                  if ($scope.data.validation.first ||
                      $scope.data.validation.last ||
                      $scope.data.validation.email ||
                      $scope.data.validation.passwords)
                  {
                   // result = false;
                  }
                  break;

                case 2:
                  break;

                case 3:
                  break;

                default:
              }

              return result;
            },

            forward: function ()
            {
              var current = this.resolve;

              if (this.validate(current))
              {
                this.value = Number(current + 1);

                $location.hash('step-' + this.value);
              }
            }
          };

          $scope.$watch('$location', function ()
          {
            $('body').removeClass();

            switch ($scope.step.resolve)
            {
              case 1:
                $('body').addClass('register-0');
                break;

              case 2:
                $('body').addClass('register-1');
                break;

              case 3:
                $('body').addClass('register-1');
                break;

              case 4:
                $('body').addClass('register-3');
                break;

              default:
            }
          });

          $scope.step.value = $scope.step.resolve;
        }
      ]
    );
  }
);