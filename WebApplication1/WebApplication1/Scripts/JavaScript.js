/// <reference path="angular.js" />

var app = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/home.html",
                controller: "homeController"
            })
            .when("/posts", {
                templateUrl: "app/posts.html",
                controller: "postsController"
            })
            .otherwise({
                redirectTo: "/home"
            });

        $locationProvider.html5Mode(true);
    })




app.controller("homeController", function ($scope) {
    
    //data...........

    var data = { empid: 1, firstName: "salman", desgination: "Software-Engineer", image: "https://localhost:44394/Images/1.jpg", gender: "Male", salary: 155000, dateOfBirth: new Date("August 15, 1974"), likes: 10, dislikes: 0 };
    var employees = [
        { firstName: "Ben", lastName: "Hastings", gender: 1, salary: 55000, dateOfBirth: new Date("August 22, 1964"), likes: 10, dislikes: 0 },
        { firstName: "Sara", lastName: "Paul", gender: 2, salary: 68000, dateOfBirth: new Date("August 13, 1934"), likes: 0, dislikes: 0 },
        { firstName: "Mark", lastName: "Holland", gender: 1, salary: 57000, dateOfBirth: new Date("January 15, 1954"), likes: 0, dislikes: 0 },
        { firstName: "Pam", lastName: "Macintosh", gender: 1, salary: 53000, dateOfBirth: new Date("August 23, 1924"), likes: 0, dislikes: 0 },
        { firstName: "Todd", lastName: "Barber", gender: 1, salary: 60000, dateOfBirth: new Date("August 12, 1975"), likes: 0, dislikes: 0 }, data
    ];

    //data....................
    $scope.message = "Employee Detail";
    $scope.employeeObject = data;
    
    $scope.employees = employees;
    $scope.employeeView = "/app/TableTemplate.html";
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



app.controller("postsController", function ($scope, $http, $location, $anchorScroll) {


    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    }

    //Services calling.........................
    $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': AUTH_STRING_HERE
        }
    }).then(function (response) {
        console.log(response.data);
        $scope.posts = response.data;
    });


});



