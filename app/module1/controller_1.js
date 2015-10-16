define(function (require) {

	var app = require("app");

    app.controller("Controller1", function ($scope) {
        $scope.message = "Message from controller 1"; 
    });
}); 