(function(){
'use strict';

angular.module("LunchCheck",[])

.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.checkTooMuch = function(){
      $scope.input = getMessage($scope.input);
    }
}

function getMessage(string) {
    if(string == null)
      return "Please enter data first";

    var items = string.split(',');

    if(items.length <= 3)
      return "Enjoy!";
    else
      return "Too much!";
}

})();
