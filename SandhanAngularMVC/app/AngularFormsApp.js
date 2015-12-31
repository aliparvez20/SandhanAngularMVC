var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);
angularFormsApp.config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider) {
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
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

angularFormsApp.controller('HomeController', ['$scope', '$location', 'DataService', '$uibModal', function ($scope, $location, DataService, $uibModal) {
    $scope.showCreateEmployeeForm = function () {
        $location.path("/newEmployeeForm");
        //$uibModal.open({
        //    templateUrl: "app/EmployeeForm/efTemplate.html",
        //    controller: "efController"
        //});
    };

    $scope.showUpdateEmployeeForm = function (id) {
        $location.path("/updateEmployeeForm/" + id);
    };


}]);

