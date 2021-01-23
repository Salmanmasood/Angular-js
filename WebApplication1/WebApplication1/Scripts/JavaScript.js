/// <reference path="angular.js" />

var app = angular.module("myModule", []);


var data = { empid: 1, firstName: "salman", desgination: "Software-Engineer", image: "https://localhost:44394/Images/1.jpg", gender: "Male", salary: 155000, dateOfBirth: new Date("August 15, 1974"), likes: 10, dislikes: 0 };
var employees = [
    { firstName: "Ben", lastName: "Hastings", gender: 1, salary: 55000, dateOfBirth: new Date("August 22, 1964"), likes: 10, dislikes: 0 },
    { firstName: "Sara", lastName: "Paul", gender: 2, salary: 68000, dateOfBirth: new Date("August 13, 1934") ,likes: 0, dislikes: 0},
    { firstName: "Mark", lastName: "Holland", gender: 1, salary: 57000, dateOfBirth: new Date("January 15, 1954"),likes: 0, dislikes: 0 },
    { firstName: "Pam", lastName: "Macintosh", gender: 1, salary: 53000, dateOfBirth: new Date("August 23, 1924"),likes: 0, dislikes: 0 },
    { firstName: "Todd", lastName: "Barber", gender: 1, salary: 60000, dateOfBirth: new Date("August 12, 1975"), likes: 0, dislikes: 0}, data
];
app.controller("myController", function ($scope) {
    $scope.message = "Employee Detail";
    $scope.employeeObject = data;
    
    $scope.employees = employees;
    $scope.rowCount = 4;
    $scope.sortColumn = "firstName";

    //Events
    $scope.sortBy = function (param) {
        $scope.sortColumn = param;
    };

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if (item.salary.toLowerCase()
                .indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.firstName.toLowerCase()
                    .indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    };

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };



    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };

});
