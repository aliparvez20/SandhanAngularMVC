angularFormsApp.factory('DataService', ["$http", function ($http) {

    var getEmployees = function () {
        return $http.get("Employee/GetEmployees");
    }

    var getEmployee = function (id) {
        if (id == 123) {
            return {
                fullname: "parvez ali",
                notes: "the ideal employee",
                department: "administration",
                payRoll: "ten99",
                dateHired: "July 11 2014",
                breakTime: "July 11 2014 3:00 PM",
                perkCar: false,
                perkStock: true,
                perkSixWeek: false
            }
        }
        return undefined;
    }

    var updateEmployee = function () {
        return true;
    }

    var insertEmployee = function (newEmployee) {
        console.log("$scope.editableEmployee", newEmployee);

        return $http.post("Employee/Create", newEmployee);
    }

    return {
        getEmployees: getEmployees,
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee

    }




}]);