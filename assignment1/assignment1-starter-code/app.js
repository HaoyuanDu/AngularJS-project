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
            if(vaildDishes === 0){
                message = "Error: Empty input!";
                //$scope.vaildDishesss = vaildDishes;          
            }else if( vaildDishes > 3) {
                message = "Too much!";
            }else{
                message= "Enjoy!";
            }
            $scope.message = message;
        }   
        
    }
    
    })();