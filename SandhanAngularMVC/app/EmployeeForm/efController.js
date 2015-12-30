angularFormsApp.controller('efController', ['$scope', 'efService', '$window', '$routeParams', '$uibModalInstance',
    function ($scope, efService, $window, $routeParams, $uibModalInstance) {

        $scope.employee = efService.employee;
        console.log("XXXX", $scope.employee);



    }]);

