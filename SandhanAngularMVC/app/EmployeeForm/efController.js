angularFormsApp.controller('efController', ['$scope', 'DataService', '$window', '$routeParams', '$uibModal',
    function ($scope, DataService, $window, $routeParams, $uibModal) {

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

        $scope.shouldShowFullName = function () {
            return true;
        };

        $scope.formSubmit = function () {
            //$scope.broadcast("show-event-errors");

            if ($scope.employeeForm.$invalid) {
                return;
            }

            if ($scope.editableEmployee.id === 0) {
                
                //insert Employee
                DataService.insertEmployee($scope.editableEmployee).then(function (result) {
                    //Success
                    $scope.employee = angular.copy($scope.editableEmployee);
                    $window.history.back();
                }, function (result) {
                    //Error
                    console.log("Error occured", result);
                });

            } else {
                //update Employee
                DataService.insertEmployee($scope.editableEmployee);
            }




        };

        $scope.formCancel = function () {
            //$window.history.back();
            if ($scope.editableEmployee.id === 0) {
                //$uibModalInstance.dismiss('cancel');
            }


        };


    }]);

