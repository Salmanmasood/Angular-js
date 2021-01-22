var myApp = angular.module("myModule", []);


var data = { empid: 1, firstName: "salman", desgination: "Software-Engineer", image: "https://localhost:44394/Images/1.jpg", gender: "Male", salary: 155000  };
var employees = [
    { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
    { firstName: "Sara", lastName: "Paul", gender: "Female", salary: 68000 },
    { firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000 },
    { firstName: "Pam", lastName: "Macintosh", gender: "Female", salary: 53000 },
    { firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000 }, data
];
myApp.controller("myController", function ($scope) {
    $scope.message = "Employee Detail";
    $scope.employeeObject = data;
    
    $scope.employees = employees ;


});
