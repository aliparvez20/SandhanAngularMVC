var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);
angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise("/home", {
            redirect: "/home"
        })
});

angularFormsApp.controller('HomeController', ['$scope', '$location', 'DataService', '$uibModal', function ($scope, $location, DataService, $uibModal) {
    $scope.showCreateEmployeeForm = function () {
        //$location.path("/newEmployeeForm");
        $uibModal.open({
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        });
    };

    $scope.showUpdateEmployeeForm = function (id) {
        //$location.path("/updateEmployeeForm/" + id);
        $uibModal.open({
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        });
    };


}]);

