(function(){
'use strict';

angular.module("LunchCheck",[])

.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.message = "";
    $scope.checkTooMuch = function(){
      if(!$scope.input)
          $scope.message = "Please enter data first";
      else
          $scope.message = getMessage($scope.input);
    }
}

function getMessage(string) {

    var items = string.split(',');

    if(items.length <= 3)
        return "Enjoy!";
    else
      return "Too much!";
}

})();
