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
            function IsEmail(email) {
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
            }

            //Contact form
            function sendMail(contact){

              var errorColor = "#a83533";
              var errorFontColor = "white";
              var rightColor = "white";
              var rightFontColor = "#433c2d";

              var sendMailURL = "mail/sendMail.php";
              sendMailURL += "?contactName="+contact.name + " " + contact.surname +
              "&contactEmail="+contact.email+
              "&contactSubject=" +contact.subject+
              "&message="+contact.message;

              $.ajax({
                url: sendMailURL
              }).done(function( data ) {
                console.log(data);
                //alert("Bericht is verzonden!");

                $scope.contact.sent = true;
              }).fail(function( error){
                console.log(error);
                //alert("Bericht is verzonden!");
              });
            }
            sendMail(contact);
          };

          /*$scope.sendContact = function (contact)
          {
            AskFast.contact(contact)
              .then(function (result)
              {
                console.log('result ->', result);

                $scope.contact.sent = true;
              });
          };*/
        }
      ]
    );
  }
);
