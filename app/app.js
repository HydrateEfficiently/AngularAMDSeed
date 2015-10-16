define(function (require) {

	var angularAMD = require("angularAMD"),
		ngRoute = require("angular-route");

	var app = angular.module("webapp", ["ngRoute"]);

	app.config(function ($routeProvider) {
		$routeProvider
			.when("/view1", angularAMD.route({
				templateUrl: "app/module1/view_1.html",
				controller: "Controller1"
			}))
			.when("/view2", angularAMD.route({
				templateUrl: "app/module2/view_2.html",
				controller: "Controller2"
			}))
			.otherwise({redirectTo: "/view1"});
	});

	return angularAMD.bootstrap(app);
});