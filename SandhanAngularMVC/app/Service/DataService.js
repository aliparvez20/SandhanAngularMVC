﻿angularFormsApp.factory('DataService', function () {

    var getEmployee = function (id) {

        if (id == 123) {
            return {
                fullname: "parvez ali",
                notes: "the ideal employee",
                department: "administration",
                perkcar: true,
                department: "marketing",
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

    var insertEmployee = function () {
        return true;
    }

    var updateEmployee = function () {
        return true;
    }

    return {
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee

    }




});