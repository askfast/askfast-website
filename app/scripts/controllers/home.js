define(
  ['controllers/controllers', 'jquery', 'config'],
  function (controllers, $, config)
  {
    'use strict';

    console.log('$ ->', $);

    //$(document).ready(function(){
      $('.bxslider').bxSlider();
    //});

    controllers.controller ('home',
      [
        '$scope',
        function ($scope)
        {
          // console.log('config ->', config);
          $scope.naming = 'Cengiz';
        }
      ]
    );
  }
);