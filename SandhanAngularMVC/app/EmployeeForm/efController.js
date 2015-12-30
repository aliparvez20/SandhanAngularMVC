angularFormsApp.controller('efController', ['$scope', 'efService',
    function ($scope, efService) {

        $scope.employee = efService.employee;
        
        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];


        $scope.onSubmitForm = function () {
            alert(1);
        }


    }]);

