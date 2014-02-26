define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    controllers.controller ('promotional',
      [
        '$rootScope', '$scope', 'AskFast',
        function ($rootScope, $scope, AskFast)
        {
          $('body').removeClass();

          $scope.setChannelView = function (view)
          {
            $scope.channelView = {
              tel:    false,
              mail:   false,
              twitter:false,
              email:  false,
              gMail:  false
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

          $scope.switchDevMod = function (mod)
          {
            $scope.devModView = {
              verify:   false,
              broadcast:false,
              tracking: false,
              click:    false
            };

            $scope.devModView[mod] = true;
          };

          $scope.setChannelView('tel');
          $scope.setPromiseView('cost');
          $scope.switchDevMod('verify');

          $scope.contact = {};

          $scope.contact.sent = false;

          $scope.sendContact = function (contact)
          {
            AskFast.contact(contact)
              .then(function (result)
              {
                console.log('result ->', result);

                $scope.contact.sent = true;
              });
          };
        }
      ]
    );
  }
);