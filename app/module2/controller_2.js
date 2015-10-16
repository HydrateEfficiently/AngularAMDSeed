define(function (require) {

	var app = require("app");
	
    app.controller("Controller2", function ($scope) {
        $scope.message = "Message from controller 2"; 
    });
}); 