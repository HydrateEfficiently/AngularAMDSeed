require.config({
	baseUrl: "app",    
	paths: {
		// External libraries
		"angular": "bower_components/angular/angular.min",
		"angular-route": "bower_components/angular-route/angular-route.min",
		"angularAMD": "bower_components/angularAMD/angularAMD.min",

		// Controllers
		"Controller1": "module1/controller_1",
		"Controller2": "module2/controller_2"
	},
	shim: {
		"angularAMD": ["angular"],
		"angular-route": ["angular"]
	},
	deps: ["app"]
});