﻿angularFormsApp.controller('efController', ['$scope', 'DataService', '$window', '$routeParams', '$uibModalInstance',
    function ($scope, DataService, $window, $routeParams, $uibModalInstance) {
    
    if ($routeParams.id)
        $scope.employee = DataService.getEmployee($routeParams.id);
    else
        $scope.employee = { id: 0 };

    $scope.editableEmployee = angular.copy($scope.employee);
    console.log($scope.editableEmployee);
    $scope.departments = [
                    "Engineering",
                    "marketing",
                    "Finance",
                    "Administartion"
    ];

    $scope.formSubmit = function () {
        if ($scope.editableEmployee.id === 0) {
            //insert Employee
            DataService.insertEmployee($scope.editableEmployee);
        } else {
            //update Employee
            DataService.insertEmployee($scope.editableEmployee);
        }


        $scope.employee = angular.copy($scope.editableEmployee);
        //$window.history.back();
        $uibModalInstance.close();
    };

    $scope.formCancel = function () {
        //$window.history.back();
        $uibModalInstance.dismiss('cancel');

    };
    

}]);

