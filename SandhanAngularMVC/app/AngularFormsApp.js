var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);
angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/job", {
            templateUrl: "app/job/job.html",
            controller: "page.job.ctrl"
        })
        .when("/newJobForm", {
            templateUrl: "app/job/job.html",
            controller: "page.job.ctrl"
        })
        .when("/updateJobForm/:id", {
            templateUrl: "app/jobForm/job.html",
            controller: "page.job.ctrl"
        })
        .otherwise("/job", {
            redirect: "/job"
        })
});

angularFormsApp.controller('HomeController', ['$scope', '$location', 'DataService', '$uibModal', function ($scope, $location, DataService, $uibModal) {
    


}]);

