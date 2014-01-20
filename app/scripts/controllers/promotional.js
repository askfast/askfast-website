define(
  ['controllers/controllers', 'jquery'],
  function (controllers)
  {
    'use strict';

    /*
    $(document).ready(function ()
    {
      $('.bxslider').bxSlider();
    });

    $('.bxslider').bxSlider();

    console.log('coming to ehre');
    */

    controllers.controller ('promotional',
      [
        '$scope', 'User',
        function ($scope, User)
        {
          $scope.name = User.get();
        }
      ]
    );
  }
);