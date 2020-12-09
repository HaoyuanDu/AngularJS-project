(function () {
'use strict';

angular.module('LunchChecker',[])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
    
    $scope.inputText = "";
   
    $scope.countDishes = function(){
        var dishes= $scope.inputText.split(',');
        $scope.dishes = dishes;
        var vaildDishes = 0;
        for(var i = 0; i< dishes.length; i++){
            if(dishes[i] != ""){
                vaildDishes++;
            }
        }
        var message = "this is good";
        $scope.vaildDishes = vaildDishes;
        if(vaildDishes < 1){
            return "empty input"           
        }
        if( vaildDishes > 3) {
            message = "Too much!";
            $scope.vaildDishesss = vaildDishes;
        }else{
            message= "Enjoy!";
            $scope.vaildDishess = vaildDishes;
        }
        $scope.message = message;
    }

    $scope.sayMessage1 = function(){
        return "Enjoy!"
    }
    $scope.sayMessage2 = function(){
        return "Too much!"
    }
    
    


    
};


})();